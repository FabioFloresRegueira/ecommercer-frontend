/***/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/***/
import { ProdutoListaComponent } from './componentes/produto-lista/produto-lista.component';
import { ProdutoDetalhesComponent } from './componentes/produto-detalhes/produto-detalhes.component';
import { ProdutoAdicionaComponent } from './componentes/produto-adiciona/produto-adiciona.component';
const routes: Routes = [
   { path: '', redirectTo: 'listaprodutos', pathMatch: 'full' },
   { path: 'listaprodutos', component: ProdutoListaComponent },
   { path: 'produto/:id', component: ProdutoDetalhesComponent},
   { path: 'adiciona', component: ProdutoAdicionaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
