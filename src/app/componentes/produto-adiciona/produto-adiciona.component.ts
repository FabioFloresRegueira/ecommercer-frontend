/*
  COMPONENTE: produto-adiciona.componente.ts
*/
import { Component, OnInit } from '@angular/core';
/***/
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
/***/
@Component({
  selector: 'app-produto-adiciona',
  templateUrl: './produto-adiciona.component.html',
  styleUrls: ['./produto-adiciona.component.css']
})

export class ProdutoAdicionaComponent {

produto : Produto = {
  nome : '',
  preco : 0
}

submitted = false;

constructor( private produtoservice : ProdutoService){}

ngOnInit(): void {

}

salvaProduto(): void {

  const dados = {
    nome: this.produto.nome,
    preco: this.produto.preco
  }

  this.produtoservice.criaProduto(dados)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.submitted = true;
      },
      error: (erro) => console.error(erro)
    });
  }

  novoProduto(): void {
    this.submitted = false;
    this.produto = {
      nome: '',
      preco: 0
    }

  }


}
