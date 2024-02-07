import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinginRoutingModule } from './singing-routing.module';
import { SigninComponent } from '../components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SinginRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class SinginModule { }