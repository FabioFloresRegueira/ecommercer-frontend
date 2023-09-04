/*
  SERVIÇO: produto.service.ts
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/***/
import { Produto } from '../models/produto.model';
/***/
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:8084/rest';

  constructor(private http: HttpClient) { }

  pegaProdutolista(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/listaprodutos`)
  }

  pegaProdutoid(id: any): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/listaumproduto/${id}`);
  }

  criaProduto(dados: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/adicionaproduto`, dados);
  }

  alteraProduto(id: any, dados: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/alteraproduto/${id}`, dados);
  }

  deletaProduto(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/apagaproduto/${id}`, { responseType: 'text' });
  }


}
