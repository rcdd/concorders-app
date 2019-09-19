import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartersPage } from './test.page';

describe('TestPage', () => {
  let component: StartersPage;
  let fixture: ComponentFixture<StartersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
