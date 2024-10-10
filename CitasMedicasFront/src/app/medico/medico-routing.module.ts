import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

 { path: 'medico', redirectTo: 'medico/index', pathMatch: 'full'},
 { path: 'medico/index', component: IndexComponent},
 { path: 'medico/create', component: CreateComponent},
 { path: 'medico/edit/:id_medico', component: EditComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
