import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmVeterinariosComponent } from './abm-veterinarios.component';

describe('AbmVeterinariosComponent', () => {
  let component: AbmVeterinariosComponent;
  let fixture: ComponentFixture<AbmVeterinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmVeterinariosComponent]
    });
    fixture = TestBed.createComponent(AbmVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
