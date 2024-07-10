import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndSkillsComponent } from './front-end-skills.component';

describe('FrontEndSkillsComponent', () => {
  let component: FrontEndSkillsComponent;
  let fixture: ComponentFixture<FrontEndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontEndSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontEndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
