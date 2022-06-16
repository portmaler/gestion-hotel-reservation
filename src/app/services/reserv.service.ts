import { Injectable } from '@angular/core';
import { Reservation } from 'app/model/reservation';

@Injectable()
export class ReservService {

  item: Reservation;
/* . . . */

  addItem(reserv: Reservation) {
    this.item = reserv;
  }

  getItems() {
    return this.item;
  }

  constructor() { }

}
