import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  private readonly authors: string[];
  private count: number;

  constructor(readonly service: AuthorsService) {
    this.authors = [...service.getAutors()];
    this.count = this.authors.length;
  }

  ngOnInit() {}
}
