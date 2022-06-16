import { Component, OnInit } from '@angular/core';
import { Reservation } from 'app/model/reservation';
import { ReservService } from 'app/services/reserv.service';
import reservList from '../reservs.json';

@Component({
  selector: 'app-list-reserv',
  templateUrl: './list-reserv.component.html',
  styleUrls: ['./list-reserv.component.css']
})
export class ListReservComponent implements OnInit {

  reserSer = new ReservService;

  constructor() { }

  ngOnInit() {
  }

  reservations: Reservation[] = reservList;



}
