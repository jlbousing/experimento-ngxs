import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule} from '@ngxs/store';
import { NgxsReduxDevtoolsPlugin} from '@ngxs/devtools-plugin';
import { NgxsLoggerPlugin} from '@ngxs/logger-plugin';
import { CounterState} from './store/counter.state';
import { UsersState} from './store/users.state';
import { HttpClientModule} from '@angular/common/http';
import { UsersService} from './service/users.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      CounterState,
      UsersState
    ]),
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
