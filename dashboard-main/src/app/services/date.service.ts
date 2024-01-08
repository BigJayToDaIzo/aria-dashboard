import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private date = new Date().getDate().toString();


  constructor() { }

  getDate(): string{
    return this.date;
  }

  setDate(date: Date){
    this.date = date.toString();
    
  }
}
