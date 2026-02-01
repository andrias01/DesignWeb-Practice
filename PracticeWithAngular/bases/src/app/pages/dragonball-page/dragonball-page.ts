import { Component, signal } from '@angular/core';
import { Navbar } from "../../components/shared/navbar/navbar";

interface DragonballCharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [Navbar],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  addCharater() {
    console.log({ name: this.name(), power: this.power() });
    if (!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter: DragonballCharacter = {
      id: Math.max(...this.characters().map(c => c.id)) + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update(chars => [...chars, newCharacter]);
    this.resetFilds();
  }
  resetFilds() {
    this.name.set('');
    this.power.set(0);
  }
  name = signal('');
  power = signal(0);

  characters = signal<DragonballCharacter[]>([
    { id: 1, name: 'Goku', power: 1500 },
    // { id: 2, name: 'Vegeta', power: 1400 },
    // { id: 3, name: 'Piccolo', power: 1300 },
    // { id: 4, name: 'Gohan', power: 1200 },
    // { id: 5, name: 'Trunks', power: 500 },
    // { id: 6, name: 'Frieza', power: 1600 }
  ]);


}
