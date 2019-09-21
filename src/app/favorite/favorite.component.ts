import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  template: `
    <div>
      <span
        class="glyphicon"
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"
        (click)="onClick()"
      ></span>
    </div>
  `,
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;

  constructor() {}

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {}
}
