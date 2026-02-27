import { AfterViewInit, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { TopBarComponentComponent } from '../top-bar-component/top-bar.component';
import { GridBoardComponentComponent } from '../grid-board-component/grid-board.component';
import { SidePanelComponentComponent } from '../side-panel-component/side-panel.component';
import { CombatLogComponentComponent } from '../combat-log-component/combat-log.component';
import { Tile } from '../models/Tile';

@Component({
  selector: 'app-game-engine-component',
  imports: [TopBarComponentComponent,GridBoardComponentComponent,SidePanelComponentComponent,CombatLogComponentComponent],
  templateUrl: './game-engine.component.html',
  styleUrl: './game-engine.component.css'
})
export class GameEngineComponentComponent {
  /* dimension: WritableSignal<Number> = signal(3); */
  dimension: number = 3; 
  Tiles: WritableSignal<Tile[]> = signal(this.generateTiles());


  changeDimension(dim: number){
    this.dimension = dim;
    this.Tiles.set(this.generateTiles());
  }

  generateTiles(){
    return Array(this.dimension*this.dimension).fill(null).map(
      (v,i)=> {
        const t  = ['floor','hazard','wall'][Math.floor(Math.random() * 3)];
        return {
          id:`tile-${i+1}`,
          position: {x: i%this.dimension, y: i/this.dimension},
          type: t,
          isWalkable: t != 'wall',
          occupant: null
        } 
      }
    );

    
  }


}
