import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForm2Component } from './page-form2/page-form2.component';
import { PageForm1Component } from './page-form1/page-form1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'form1', component: PageForm1Component},
  {path: 'form2', component: PageForm2Component},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
