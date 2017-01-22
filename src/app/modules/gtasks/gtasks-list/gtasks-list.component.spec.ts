/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GtasksListComponent } from './gtasks-list.component';

describe('GtasksListComponent', () => {
  let component: GtasksListComponent;
  let fixture: ComponentFixture<GtasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
