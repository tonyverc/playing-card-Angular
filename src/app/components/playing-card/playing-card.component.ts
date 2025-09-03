import { Component } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  name:string = "My Monster";
  hp:number = 40;
  figureCaption:string = "N°25 Monster";
  attackName:string = "Geo Impact";
  attackStrength:number = 60;
  attackDescription:string = "Description of the monster capacity";
}
