/*
  COMPONENTE: produto-detalhes.componente.ts
*/
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/***/
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
/***/
@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})

export class ProdutoDetalhesComponent {

  @Input() viewMode = false;

  @Input() produtoAtual: Produto = {
    nome: '',
    preco: 0
  };

  mensagem = '';

  constructor( private produtoservice : ProdutoService,
               private route : ActivatedRoute,
               private router: Router){}

  ngOnInit(): void{
    if (!this.viewMode) {
      this.mensagem = '';
      this.pegaProduto(this.route.snapshot.params["id"]);
    }
  }

  pegaProduto(id: number) : void {
    this.produtoservice.pegaProdutoid(id)
      .subscribe({
        next: (dados) => {
          this.produtoAtual = dados;
          console.log(dados);
        },
        error: (erro) => console.error(erro)
      });
  }


  atualizaProduto(): void{

    this.mensagem = '';

    this.produtoservice.alteraProduto(this.produtoAtual.id, this.produtoAtual)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.mensagem = response.message ? response.message : 'Este Produto foi atualizado !'

        },
        error: (erro) => console.error(erro)
      });

  }

  apagaProduto() : void {
    this.produtoservice.deletaProduto(this.produtoAtual.id)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/listaprodutos']);
        },
        error: (erro) => console.error(erro)
      });
  }



}
