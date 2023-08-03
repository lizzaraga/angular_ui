import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  images =[
    "https://picsum.photos/id/13/600/600",
    "https://picsum.photos/id/237/600/600",
    "https://picsum.photos/id/50/600/600",
    "https://picsum.photos/id/16/600/600",
    "https://picsum.photos/id/32/600/600",
    "https://picsum.photos/id/78/600/600",
  ]

  ngOnInit(): void {
    console.log(this.counter)

  }

  @ViewChild(CounterComponent)
  counter!: CounterComponent

}
