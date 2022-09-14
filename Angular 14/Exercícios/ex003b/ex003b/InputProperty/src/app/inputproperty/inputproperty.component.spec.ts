import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputpropertyComponent } from './inputproperty.component';

describe('InputpropertyComponent', () => {
  let component: InputpropertyComponent;
  let fixture: ComponentFixture<InputpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
