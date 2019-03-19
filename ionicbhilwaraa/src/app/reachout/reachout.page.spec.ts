import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachoutPage } from './reachout.page';

describe('ReachoutPage', () => {
  let component: ReachoutPage;
  let fixture: ComponentFixture<ReachoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
