import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermanComponent } from './superman.component';

describe('SupermanComponent', () => {
  let component: SupermanComponent;
  let fixture: ComponentFixture<SupermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupermanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
