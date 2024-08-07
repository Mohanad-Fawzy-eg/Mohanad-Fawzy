import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStComponent } from './project-st.component';

describe('ProjectStComponent', () => {
  let component: ProjectStComponent;
  let fixture: ComponentFixture<ProjectStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectStComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
