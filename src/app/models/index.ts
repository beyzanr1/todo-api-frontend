export * from './user.model';
export * from './task.model';
export * from './paged-result.model';

export interface ColumnDef<T = any>{
    key: keyof T| string;

    header: string;
    
    valueFn?: (row: T)=> any;

    stickyEnd? : boolean;
    kind?: 'text'| 'action';
    actionText?: string;
    actionType?: string
}
export interface FieldDef< T= any >{
    label: string;
    key? : keyof T | string;
    valueFn? : (model: T)=> any;
}