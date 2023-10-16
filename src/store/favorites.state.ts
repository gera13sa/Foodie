import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FavoriteUpdate } from './model/favorites.model';

@State<number[]>({
  name: 'FavoritesState',
  defaults: [],
})
@Injectable()
export class FavoritesState {
  @Selector()
  static getFavorites(state: number[]) {
    return state;
  }

  @Action(FavoriteUpdate)
  favoriteUpdate(ctx: StateContext<number[]>, action: FavoriteUpdate) {
    if (ctx.getState().includes(action.payload)) {
      const state = ctx.getState();
      const filteredFavorite = state.filter(
        (favorite) => favorite !== action.payload
      );

      ctx.setState(filteredFavorite);
    } else {
      ctx.setState([...ctx.getState(), action.payload]);
    }
  }
}
