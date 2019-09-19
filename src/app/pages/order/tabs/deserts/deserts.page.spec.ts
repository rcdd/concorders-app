import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertsPage } from './deserts.page';

describe('DesertsPage', () => {
  let component: DesertsPage;
  let fixture: ComponentFixture<DesertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesertsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
