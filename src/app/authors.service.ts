import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor() {}

  getAutors() {
    return ['yuichi', 'maiko', 'asuka'];
  }
}
