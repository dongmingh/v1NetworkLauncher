import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NetworkService } from './app.service';

import { AppComponent, ConfirmationDialog } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent, ConfirmationDialog]
})
export class AppModule { }
