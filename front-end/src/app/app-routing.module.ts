import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './views/home/home.component';
import { CrudComponent } from './views/product/crud/crud.component';
import { CreateComponent } from './components/products/create/create.component';
import { UpdateComponent } from './components/products/update/update.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: CrudComponent
  },
  {
    path: "products/create",
    component: CreateComponent
  },
  {
    path: "products/update/:id",
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
