import { Component ,EventEmitter,Input,Output} from '@angular/core';
import { FieldDef } from '../../models';

@Component({
  selector: 'app-detail-card',
  standalone: false,
  templateUrl: './detail-card.html',
  styleUrl: './detail-card.scss'
})
export class DetailCard < T extends Record< string,any>>{ 

  @Input() title = '';
  @Input() model!: T | null;
  @Input () fields: FieldDef <T>[] = [];

  @Input () loading = false;
  @Input () error: string | null= null;

  @Output () edit = new EventEmitter<void>();
  @Output () remove = new EventEmitter <void>();

  getValue(f: FieldDef<T>): any {
    if(!this.model) return '';
    if(f.valueFn) return f.valueFn(this.model);
    return (this.model as any )[ String (f.key)];

  }

}