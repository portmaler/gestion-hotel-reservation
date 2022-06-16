/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddReservComponent } from './add-reserv.component';

describe('AddReservComponent', () => {
  let component: AddReservComponent;
  let fixture: ComponentFixture<AddReservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
