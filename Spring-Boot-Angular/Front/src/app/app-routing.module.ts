import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './ventass-list/ventass-list.component';
import { CreateEmployeeComponent } from './create-ventass/create-ventass.component';
import { UpdateEmployeeComponent } from './update-ventass/update-ventass.component';
import { EmployeeDetailsComponent } from './ventass-details/ventass-details.component';


const routes: Routes = [

  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
