import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'app/model/reservation';
import { ReservService } from 'app/services/reserv.service';

@Component({
  selector: 'app-add-reserv',
  templateUrl: './add-reserv.component.html',
  styleUrls: ['./add-reserv.component.css']
})
export class AddReservComponent implements OnInit {

   reserv: Reservation = {
    id: null,
    nchambre: null,
      debuts: '',
      fins: '',
      nbnuits: null,
      type: '',
      fumer: ''
  };
  id: number = null;
  nchambre: number = null;
  debuts: string = '';
  fins: string = '';
  nbnuits: number = null;
  type: string = '';
  fumer: string = '' 

  reserser: ReservService;

  constructor(public router: Router) {
   }

  ngOnInit() {}

  onSubmit(){

    this.reserv.id = this.id;
      this.reserv.nchambre = this.nchambre;
      this.reserv.debuts = this.debuts;
      this.reserv.fins = this.fins;
      this.reserv.nbnuits = this.nbnuits;
      this.reserv.type = this.type;
      this.reserv.fumer= this.fumer; 


    this.reserser.addItem(this.reserv);
     // this.router.navigate(['list']);
   }

}
