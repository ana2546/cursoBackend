// src/types/auth.ts
export interface JwtPayload {
  id: number;
  username:string,
  role: UserRole;
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}