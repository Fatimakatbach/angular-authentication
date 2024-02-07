import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './core/components/menu/menu.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './core/services/intercepors/authconfig.interceptor';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    MenuComponent,
    FooterComponent,
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }
  ],
})
export class AppModule { }