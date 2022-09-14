import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingeventComponent } from './bindingevent.component';

describe('BindingeventComponent', () => {
  let component: BindingeventComponent;
  let fixture: ComponentFixture<BindingeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
