import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraFormComponent } from './components/compra-form/compra-form.component';
import { CompraListComponent } from './components/compra-list/compra-list.component';
import { NewsComponent } from './components/news/news.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TrabajadorFormComponent } from './components/trabajador-form/trabajador-form.component';
import { TrabajadorListComponent } from './components/trabajador-list/trabajador-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'compra', component:CompraListComponent},
  {path: 'product', component:ProductListComponent},
  {path: 'compra/create', component:CompraFormComponent},
  {path: 'tarea', component:TareaListComponent},
  {path: 'tarea/create', component:TareaFormComponent},
  {path: 'trabajador', component:TrabajadorListComponent},
  {path: 'trabajador/create', component:TrabajadorFormComponent},
  {path: 'news', component:NewsComponent},
  {path: 'compra/update/:id', component:CompraFormComponent},
  {path: 'trabajador/update/:id', component:TrabajadorFormComponent},
  {path: 'tarea/update/:id', component:TareaFormComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
