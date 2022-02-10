import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NewsComponent } from './components/news/news.component';
import { ShopComponent } from './components/shop/shop.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';
import { CompraFormComponent } from './components/compra-form/compra-form.component';
import { TrabajadorFormComponent } from './components/trabajador-form/trabajador-form.component';
import { TrabajadorListComponent } from './components/trabajador-list/trabajador-list.component';
import { CompraListComponent } from './components/compra-list/compra-list.component';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductFormComponent,
    NewsComponent,
    ShopComponent,
    InicioComponent,
    TareaFormComponent,
    CompraFormComponent,
    TrabajadorFormComponent,
    TrabajadorListComponent,
    CompraListComponent,
    TareaListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
