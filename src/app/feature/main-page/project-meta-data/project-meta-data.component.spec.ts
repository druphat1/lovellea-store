import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMetaDataComponent } from './project-meta-data.component';

describe('ProjectMetaDataComponent', () => {
  let component: ProjectMetaDataComponent;
  let fixture: ComponentFixture<ProjectMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMetaDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
