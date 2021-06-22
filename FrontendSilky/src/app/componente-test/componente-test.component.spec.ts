import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTEstComponent } from './componente-test.component';

describe('ComponenteTEstComponent', () => {
  let component: ComponenteTEstComponent;
  let fixture: ComponentFixture<ComponenteTEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteTEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteTEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
