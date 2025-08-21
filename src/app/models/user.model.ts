export type Role = 0 | 1 | 2; 

export interface UserRow {
  id: number;
  name: string;
  email: string;
  role: Role;
  created_at: string;   
}
