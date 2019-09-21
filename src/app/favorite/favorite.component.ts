import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  template: `
    <div>
      <span class="glyphicon glyphicon-{{ status }}" (click)="onClick()"></span>
    </div>
  `,
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  status = 'star';
  isActive = true;

  constructor() {}

  onClick() {
    this.isActive = !this.isActive;
    this.isActive ? (this.status = 'star') : (this.status = 'star-empty');
  }

  ngOnInit() {}
}
