import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingexperienceComponent } from './workingexperience.component';

describe('WorkingexperienceComponent', () => {
  let component: WorkingexperienceComponent;
  let fixture: ComponentFixture<WorkingexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
