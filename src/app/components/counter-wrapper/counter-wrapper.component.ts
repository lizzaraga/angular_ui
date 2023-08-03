import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-wrapper',
  templateUrl: './counter-wrapper.component.html',
  styleUrls: ['./counter-wrapper.component.scss']
})
export class CounterWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.counter)
    setInterval(() => {
      this.counter?.increment()
    }, 1000)
  }

  @ViewChild(CounterComponent)
  counter!: CounterComponent


}
