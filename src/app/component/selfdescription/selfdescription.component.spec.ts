import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfdescriptionComponent } from './selfdescription.component';

describe('SelfdescriptionComponent', () => {
  let component: SelfdescriptionComponent;
  let fixture: ComponentFixture<SelfdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
