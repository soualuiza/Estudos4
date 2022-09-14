import { ProductComponent } from './components/product-create/product/product.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProComponent } from './pro/pro.component';
import { HomeComponent } from './home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';





const routes: Routes = [ /* 2. São importadas as rotas para o app-routing. */

  {path: 'home', component: HomeComponent}, 
  {path: 'contato', component: ContactComponent},
  {path: 'pro', component: ProComponent},
  {path: 'product-create', component: ProductComponent},
  {path: 'product-update/:id', component: ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
