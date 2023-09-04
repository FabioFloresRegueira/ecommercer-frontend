/*
  COMPONENTE: produto-lista.componente.ts
*/
import { Component, OnInit } from '@angular/core';
/***/
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from '../../services/produto.service';
/***/
@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})

export class ProdutoListaComponent {

  produtos: Produto[] = [];
  //produtos?: Produto[];
  produtoAtual: Produto = {};
  indexAtual = -1;
  nome = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3,6, 9];

  constructor(private produtoservice: ProdutoService){}

  ngOnInit(): void {
    this.recuperaProdutos();
  }

  recuperaProdutos() : void {

    const params = this.getRequestParams(this.nome, this.page, this.pageSize);

    this.produtoservice.pegaProdutolista()
      .subscribe({
        next: (dados) => {
          this.produtos = dados;
          console.log(dados);
        },
        error: (erro) => console.error(erro)
      });
  }

  atualizarLista(): void {
    this.recuperaProdutos();
    this.produtoAtual = {};
    this.indexAtual = -1;
  }

  ativarProduto(produto: Produto, index: number): void {
    this.produtoAtual = produto;
    this.indexAtual = index;
  }


  // PAGINAÇÃO
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }


  handlePageChange(event : number) {
    this.page = event;
    this.recuperaProdutos();
  }


  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.recuperaProdutos();
  }

}
