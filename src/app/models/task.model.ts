export type TaskStatus = 'pending' | 'completed' | 'in_progress'; 
export type TaskPriority = 'low' | 'medium' | 'high';

export interface TaskRow {
  id: number;
  title: string;
  description: string | null;
  status: TaskStatus;             
  user_id: number;
  created_at: string;             
  updated_at: string | null;      
  priority: TaskPriority | null;  
}

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  pending: 'Beklemede',
  completed: 'Tamamlandı',
  in_progress: 'Devam Ediyor',
};

export function formatTaskDate(s: string | null | undefined): string {
  return s ?? '';
}
