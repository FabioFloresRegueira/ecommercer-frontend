import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAdicionaComponent } from './produto-adiciona.component';

describe('ProdutoAdicionaComponent', () => {
  let component: ProdutoAdicionaComponent;
  let fixture: ComponentFixture<ProdutoAdicionaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoAdicionaComponent]
    });
    fixture = TestBed.createComponent(ProdutoAdicionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
