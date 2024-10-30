import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MedicoRoutingModule } from './medico-routing.module';
import { AppComponent } from '../app.component';
import { IndexComponent } from './index/index.component';
import { routes } from '../app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserModule
    
  ],
  providers:[],
  bootstrap: [IndexComponent]
})
export class MedicoModule { }
