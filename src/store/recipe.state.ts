import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { RecipeIngUpdate, RecipeStepsUpdate } from './model/recipe.model';

@State<string[]>({
  name: 'IngredientsState',
  defaults: [],
})
@Injectable()
export class IngredientsState {
  @Selector()
  static getIngredients(state: string[]) {
    return state;
  }

  @Action(RecipeIngUpdate)
  recipeIngUpdate(ctx: StateContext<string[]>, action: RecipeIngUpdate) {
    if (ctx.getState().includes(action.payload)) {
      const state = ctx.getState();
      const filteredIng = state.filter(
        (ingredient) => ingredient !== action.payload
      );

      ctx.setState(filteredIng);
    } else {
      ctx.setState([...ctx.getState(), action.payload]);
    }
  }

  @Action(RecipeStepsUpdate)
  recipeStepsUpdate(ctx: StateContext<string[]>, action: RecipeStepsUpdate) {
    if (ctx.getState().includes(action.payload)) {
      const state = ctx.getState();
      const filteredSteps = state.filter((steps) => steps !== action.payload);

      ctx.setState(filteredSteps);
    } else {
      ctx.setState([...ctx.getState(), action.payload]);
    }
  }
}
