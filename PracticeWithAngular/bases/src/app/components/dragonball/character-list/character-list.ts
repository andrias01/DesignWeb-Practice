import { Component, input } from '@angular/core';
import type { DragonballCharacterInterface } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList { 
  characters = input.required<DragonballCharacterInterface[]>();
  listName = input.required<string>();
  
}
