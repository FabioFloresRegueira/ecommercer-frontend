/***/
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

/***/
import { ProdutoDetalhesComponent } from './componentes/produto-detalhes/produto-detalhes.component';
import { ProdutoListaComponent } from './componentes/produto-lista/produto-lista.component';
import { ProdutoAdicionaComponent } from './componentes/produto-adiciona/produto-adiciona.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoDetalhesComponent,
    ProdutoListaComponent,
    ProdutoAdicionaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
