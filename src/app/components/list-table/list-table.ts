import { Component,Input,Output,EventEmitter,ViewChild,OnChanges ,SimpleChanges,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ColumnDef } from '../../models/index';

@Component({
  selector: 'app-list-table',
  standalone: false,
  templateUrl: './list-table.html',
  styleUrl: './list-table.scss'
})
export class ListTable <T extends Record<string, any>>
  implements OnChanges, AfterViewInit {

  @Input() columns: ColumnDef<T>[] = [];
  @Input() data: T[] = [];
  @Input() loading = false;
  @Input() error: string | null = null;
  @Input() pageSizeOptions = [5, 10, 25, 50];
  @Input() pageSize = 10;

  @Input() filterKeys?: Array<keyof T | string>;

  @Input() rowClickable = false;

  @Output() rowClick = new EventEmitter<T>();
  @Output() action = new EventEmitter<{ type?: string; row: T; col: ColumnDef<T> }>();

  dataSource = new MatTableDataSource<T>([]);
  displayedKeys: string[] = [];
  private lastFilterTerm = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedKeys = this.columns.map(c => String(c.key));
      this.setupFilterPredicate(); 
    }

    if (changes['data']) {
      this.dataSource = new MatTableDataSource<T>(this.data ?? []);
      
      if (this.paginator) this.dataSource.paginator = this.paginator;
      if (this.sort) this.dataSource.sort = this.sort;
      this.setupFilterPredicate(); 
      
      if (this.lastFilterTerm) this.applyFilter(this.lastFilterTerm);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(value: string) {
    this.lastFilterTerm = (value ?? '').trim();
    this.dataSource.filter = this.lastFilterTerm;
    
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  private setupFilterPredicate() {
    const searchCols = (this.filterKeys?.map(String)) ??
      this.columns
        .filter(c => c.kind !== 'action') 
        .map(c => String(c.key));

    const resolvers = this.columns.reduce<Record<string, (row: T) => any>>((acc, c) => {
      const key = String(c.key);
      acc[key] = (row: T) => c.valueFn ? c.valueFn(row) : (row as any)[key];
      return acc;
    }, {});

    this.dataSource.filterPredicate = (row: T, filter: string) => {
      const tokens = this.normalize(filter).split(/\s+/).filter(Boolean);
      if (tokens.length === 0) return true;

  
      const haystack = searchCols
        .map(k => this.normalize(resolvers[k]?.(row)))
        .join(' ');

  
      return tokens.every(t => haystack.includes(t));
    };
  }


  private normalize(v: any): string {
    if (v === null || v === undefined) return '';
    let s = String(v);
    s = s.trim();

   
    try { s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); } catch {}

    s = s
      .replace(/ğ/gi, 'g')
      .replace(/ş/gi, 's')
      .replace(/ı/g, 'i').replace(/İ/g, 'i')
      .replace(/ç/gi, 'c')
      .replace(/ö/gi, 'o')
      .replace(/ü/gi, 'u');

    return s.toLowerCase();
  }

 
  onRowClick(row: T) { this.rowClick.emit(row); }

  onActionClick(type: string | undefined, row: T, col: ColumnDef<T>) {
    this.action.emit({ type: type || 'action', row, col });
  }
}