/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GtasksEditComponent } from './gtasks-edit.component';

describe('GtasksEditComponent', () => {
  let component: GtasksEditComponent;
  let fixture: ComponentFixture<GtasksEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtasksEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtasksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
