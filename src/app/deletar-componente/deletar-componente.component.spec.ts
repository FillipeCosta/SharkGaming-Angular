import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarComponenteComponent } from './deletar-componente.component';

describe('DeletarComponenteComponent', () => {
  let component: DeletarComponenteComponent;
  let fixture: ComponentFixture<DeletarComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
