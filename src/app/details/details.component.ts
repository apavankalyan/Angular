import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent {

  name = 'Pavan';
  age = 25;
  email = 'pavan@test.com';
  phone = 1234567890;
  DOB = new Date('07/23/1993');
  constructor() { }


}
