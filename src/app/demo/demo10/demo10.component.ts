import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.css']
})

export class Demo10Component {

  data : Observable<number[]> = interval(1000).pipe(map((value) => [value]))
}
