import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModuloComponent } from './add-modulo.component';

describe('AddModuloComponent', () => {
  let component: AddModuloComponent;
  let fixture: ComponentFixture<AddModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddModuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
