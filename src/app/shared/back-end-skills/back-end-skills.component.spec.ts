import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndSkillsComponent } from './back-end-skills.component';

describe('BackEndSkillsComponent', () => {
  let component: BackEndSkillsComponent;
  let fixture: ComponentFixture<BackEndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackEndSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackEndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
