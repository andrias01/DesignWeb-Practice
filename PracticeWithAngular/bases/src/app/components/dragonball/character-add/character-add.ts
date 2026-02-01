import { Component, output, signal } from '@angular/core';
import { DragonballCharacterInterface } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {

  newCharacter = output<DragonballCharacterInterface>();

  addCharater() {
    if (!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter: DragonballCharacterInterface = {
      id: Math.floor(Math.random() * 10000) ,
      name: this.name(),
      power: this.power(),
    };
    this.newCharacter.emit(newCharacter);
    this.resetFilds();
  }
  resetFilds() {
    this.name.set('');
    this.power.set(0);
  }
  name = signal('Gohan');
  power = signal(100);
}
