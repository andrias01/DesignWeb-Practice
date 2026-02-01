import { effect, Injectable, signal } from '@angular/core';
import { DragonballCharacterInterface } from '../interfaces/character.interface';

const loadFromLocalStorage = (): DragonballCharacterInterface[] => {
  const data = localStorage.getItem('dragonball-characters');
  return data ? JSON.parse(data) : [];
}

@Injectable({
  providedIn: 'root'    
})
export class DragonballService { 
  addCharacter(character: DragonballCharacterInterface) {
    this.characters.update(chars => [...chars, character]);
  }

  characters = signal<DragonballCharacterInterface[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    const data = JSON.stringify(this.characters());
    localStorage.setItem('dragonball-characters', data);
  });
}