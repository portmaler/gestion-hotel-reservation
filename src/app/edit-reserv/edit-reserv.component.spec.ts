/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditReservComponent } from './edit-reserv.component';

describe('EditReservComponent', () => {
  let component: EditReservComponent;
  let fixture: ComponentFixture<EditReservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
