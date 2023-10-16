export interface Auth {
  username: string | null;
  access_token: string | null;
  role: 'user' | 'admin' | 'guest';
  id: number | null;
  fullname: string | null;
  isAuth: boolean;
}

export interface User {
  username: string;
  password: string;
}

export class AuthUpdate {
  static readonly type = '[Auth]: Auth Update';
  constructor(public payload: Auth) {}
}
