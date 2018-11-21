import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent {
  starUrl = '../assets/emptyStar.png';
  isLike = false ;

  clickMe() {
    this.starUrl = this.isLike ? '../assets/emptyStar.png' : '../assets/fullStar.png';
    this.isLike = !this.isLike;
  }
}
