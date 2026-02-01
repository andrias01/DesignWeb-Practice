import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { Navbar } from "../../components/shared/navbar/navbar";


@Component({
    templateUrl: './counter-page.html',
    styles: [`
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Navbar],
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);
  

  // constructor() {
  //   setInterval(() => {
  //     this.increaseBy(1);
  //     console.log('Counter Signal:', this.counterSignal());
  //   }, 2000);
  // }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

  increaseBy(value: number) {
    this.counter += value
    this.counterSignal.update( current => current + value );
  }

}