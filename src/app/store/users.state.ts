import { User} from '../models/user.model';
import { State, Store, Action, StateContext} from '@ngxs/store';
import {
  UsersRequestAttempt,
  UsersRequestSuccess,
  UsersRequestFailure
} from './users.action';
import { UsersService} from '../service/users.service';
import { catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';
import {Injectable} from '@angular/core';

export interface UserStateModel {
  users: User[];
}

@State({
  name: "users",
  defaults: {
    users: []
  }
})

@Injectable()
export class UsersState {

  constructor(private store: Store,
              private usersService: UsersService) {
  }


  @Action(UsersRequestAttempt)
  async UserRequestAttempt() {
    console.log("probandooo");
    this.usersService.getUsers().subscribe(
      data => {
        console.log("hace fetch");
        this.store.dispatch(new UsersRequestSuccess(data));
      },
      error => {
        console.log("hey error");
        this.store.dispatch(new UsersRequestFailure(error));
      }
    );
  }


  @Action(UsersRequestSuccess)
  UsersRequestSuccess(stateContext: StateContext<any>, action: UsersRequestFailure){
    console.log("probando action ",action);
    stateContext.patchState({
      users: action.users
    });
  }

  @Action(UsersRequestFailure)
  UsersRequestFailure(
    stateContext: StateContext,
    action: UsersRequestFailure
  ) {
    console.error('Failed to get Users. Try again later', action.error);
  }

}
