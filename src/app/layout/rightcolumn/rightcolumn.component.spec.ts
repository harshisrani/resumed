import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcolumnComponent } from './rightcolumn.component';

describe('RightcolumnComponent', () => {
  let component: RightcolumnComponent;
  let fixture: ComponentFixture<RightcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
