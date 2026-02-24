import { Component } from '@angular/core';
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
  Tiles: Tile[] = [
    {
      id:"tile-1",
      position: {x:0,y:0},
      type: 'floor',
      isWalkable: false,
      occupant: null
    },
    {
      id:"tile-2",
      position: {x:1,y:0},
      type: 'floor',
      isWalkable: false,
      occupant: null
    },
    {
      id:"tile-3",
      position: {x:2,y:0},
      type: 'floor',
      isWalkable: false,
      occupant: null
    },
    {
      id:"tile-4",
      position: {x:0,y:1},
      type: 'floor',
      isWalkable: false,
      occupant: null
    },
    {
      id:"tile-5",
      position: {x:1,y:1},
      type: 'floor',
      isWalkable: false,
      occupant: null
    },
    {
      id:"tile-6",
      position: {x:2,y:1},
      type: 'floor',
      isWalkable: false,
      occupant: null
    },
    {
      id:"tile-7",
      position: {x:0,y:2},
      type: 'floor',
      isWalkable: false,
      occupant: null
    },
    {
      id:"tile-8",
      position: {x:1,y:2},
      type: 'floor',
      isWalkable: false,
      occupant: null
    },
    {
      id:"tile-9",
      position: {x:2,y:2},
      type: 'floor',
      isWalkable: false,
      occupant: null
    },
  ];
}
