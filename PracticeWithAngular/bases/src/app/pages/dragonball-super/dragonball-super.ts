import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';
import { Navbar } from "../../components/shared/navbar/navbar";

interface DragonballCharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [CharacterList, CharacterAdd, Navbar],
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super.html',
})
export class DragonballSuperPage {
  


  public dragonballServiceCharacters = inject(DragonballService);


}
