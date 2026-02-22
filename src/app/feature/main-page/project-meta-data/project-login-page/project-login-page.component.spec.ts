import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLoginPageComponent } from './project-login-page.component';

describe('ProjectLoginPageComponent', () => {
  let component: ProjectLoginPageComponent;
  let fixture: ComponentFixture<ProjectLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
