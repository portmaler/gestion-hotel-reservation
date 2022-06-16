/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListReservComponent } from './list-reserv.component';

describe('ListReservComponent', () => {
  let component: ListReservComponent;
  let fixture: ComponentFixture<ListReservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
