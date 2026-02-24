import { Component, Input } from '@angular/core';
import { Tile } from '../models/Tile';
import { TileComponentComponent } from '../tile-component/tile.component';

@Component({
  selector: 'app-grid-board-component',
  imports: [TileComponentComponent],
  templateUrl: './grid-board.component.html',
  styleUrl: './grid-board.component.css'
})
export class GridBoardComponentComponent {
  @Input() Tiles: Tile[] = [];
}
