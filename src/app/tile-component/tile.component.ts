import { Component, Input } from '@angular/core';
import { Tile } from '../models/Tile';
import { UnitComponentComponent } from '../unit-component/unit.component';

@Component({
  selector: 'app-tile-component',
  imports: [UnitComponentComponent],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponentComponent {
  @Input() Tile:Tile | null = null;
}
