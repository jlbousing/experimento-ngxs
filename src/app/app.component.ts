import { Component, OnInit } from '@angular/core';
import { Store, Select} from '@ngxs/store';
import {Increment, Decrement, SetTotal} from './store/counter.actions';
import { Observable} from 'rxjs';
import { CounterStateModel, CounterState} from './store/counter.state';
import { UserStateModel} from './store/users.state';
import { UsersRequestAttempt} from './store/users.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'experimento-ngxs';
  @Select(state => state.counter)
    counter$: Observable<CounterStateModel>;

  @Select(state => state.users)
    users$: Observable<UserStateModel>;

    constructor(private store: Store) {
    }

    ngOnInit() {
      this.store.dispatch(new UsersRequestAttempt());
    }

  increment(){
      this.store.dispatch(new Increment());
    }

    decrement(){
      this.store.dispatch(new Decrement());
    }

    reset(){
      this.store.dispatch(new SetTotal(0));
    }


}
