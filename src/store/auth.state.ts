import { Injectable } from '@angular/core';
import { Auth, AuthUpdate } from './model/auth.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';

@State<Auth>({
  name: 'AuthState',

  defaults: {
    isAuth: false,
    fullname: null,
    role: 'guest',
    id: null,
    username: null,
    access_token: null,
  },
})
@Injectable()
export class AuthState {
  @Selector()
  static getToken(state: Auth) {
    return state.access_token;
  }

  @Selector()
  static getAuthObject(state: Auth) {
    return state;
  }

  @Selector()
  static getAuthRole(state: Auth): 'user' | 'admin' | 'guest' {
    return state.role;
  }

  @Action(AuthUpdate)
  updateUserModel(ctx: StateContext<Auth>, action: AuthUpdate) {
    ctx.patchState({
      isAuth: action.payload.isAuth,
      username: action.payload.username,
      access_token: action.payload.access_token,
      fullname: action.payload.fullname,
      id: action.payload.id,
      role: action.payload.role,
    });
  }
}
