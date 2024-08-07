import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNdComponent } from './project-nd.component';

describe('ProjectNdComponent', () => {
  let component: ProjectNdComponent;
  let fixture: ComponentFixture<ProjectNdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectNdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectNdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
