import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // <- добавлено

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { AuthInterceptor, ParamInterceptor } from './api.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // <- HTTP
  ],
  providers: [
    ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true 
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }