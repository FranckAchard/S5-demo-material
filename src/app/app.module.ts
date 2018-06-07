import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS} from '@angular/material';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatIconModule,
      MatCheckboxModule,
      MatInputModule,
      MatNativeDateModule,
      MatDatepickerModule
    ],
    providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}, ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
