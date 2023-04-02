import { Component } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
}
