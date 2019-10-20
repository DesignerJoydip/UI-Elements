import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ElementComponent } from './element/element.component';
import { AddserverComponent } from './addserver/addserver.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElementComponent,
    AddserverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
