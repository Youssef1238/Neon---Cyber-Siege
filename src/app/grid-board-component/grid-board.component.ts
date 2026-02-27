import { Component, Input, signal, Signal, WritableSignal } from '@angular/core';
import { Tile } from '../models/Tile';
import { TileComponentComponent } from '../tile-component/tile.component';

@Component({
  selector: 'app-grid-board-component',
  imports: [TileComponentComponent],
  templateUrl: './grid-board.component.html',
  styleUrl: './grid-board.component.css'
})
export class GridBoardComponentComponent {
  _Tiles: Tile[] = [];
  @Input() 
  set Tiles(Tiles:Tile[]){
    console.log(Tiles);
    this._Tiles= Tiles;
  }


  
}
