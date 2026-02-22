import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRegisterPageComponent } from './project-register-page.component';

describe('ProjectRegisterPageComponent', () => {
  let component: ProjectRegisterPageComponent;
  let fixture: ComponentFixture<ProjectRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
