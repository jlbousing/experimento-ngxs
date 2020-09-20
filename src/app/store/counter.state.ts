import { State, Store, StateContext, Action} from '@ngxs/store';
import { Increment, Decrement, SetTotal} from './counter.actions';
import { Injectable} from '@angular/core';

//CREAMOS UN TIPO PARA NUESTRO ESTADO
export interface CounterStateModel {
  total: number;
}

@State({
  name: "counter",
  defaults: {
    total: 0
  }
})

@Injectable()
export class CounterState {

  constructor(private store: Store) {
  }

  //SE RELACIONA LA ACCIÓN CON SU IMPLEMENTACIÓN
  @Action(Increment)
  Increment(stateContext: StateContext<any>){
    //SE RECOGE EL VALOR ACTUAL DEL ESTADO
    const currentTotal = stateContext.getState().total;

    //SE ACTUALIZA EL ESTADO
    stateContext.patchState({
      total: currentTotal + 1
    });
  }

  @Action(Decrement)
  Decrement(stateContext: StateContext<any>){

    const currentTotal = stateContext.getState().total;

    stateContext.patchState({
      total: currentTotal - 1
    });
  }

  @Action(SetTotal)
  // tslint:disable-next-line:typedef
  SetTotal(stateContext: StateContext<any>, action: SetTotal){

    stateContext.patchState({
      total: action.value
    });
  }
}
