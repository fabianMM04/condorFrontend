import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
//Servicios
import {SearchService} from './services/search.service';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DomseguroPipe,

   
 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
