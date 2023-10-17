import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  miliSec! : number;
  sec! : number;
  min! : number;

  transform(value: number): string {
    this.miliSec = 0;
    this.min = value / 60;
    this.sec = value % 60;

    // return `${Math.floor(this.min)} minutes ${this.sec} secondes`
    return `${this.min < 10 ? '0' : ''}${Math.floor(this.min)} : ${this.sec < 10 ? '0' : ''}${this.sec}`
  }
}