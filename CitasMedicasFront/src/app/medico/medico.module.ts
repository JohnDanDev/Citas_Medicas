import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MedicoRoutingModule } from './medico-routing.module';
import { AppComponent } from '../app.component';
import { IndexComponent } from './index/index.component';
import { routes } from '../app.routes';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    
  ]
})
export class MedicoModule { }
