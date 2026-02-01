import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { Navbar } from "../../components/shared/navbar/navbar";

@Component({
    templateUrl: './hero-page.html',
    imports: [UpperCasePipe, Navbar]
    
})
export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    capitalizedName = computed( () => {
        return this.name().toUpperCase();
    } );

    heroDescription = computed( () => {
        return `${ this.capitalizedName() } - ${ this.age() } years old`;
    } );

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetHero() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge() {
        this.age.update( currentAge => currentAge = 60 );
    }
}
