import { Component, computed, Input, Signal } from '@angular/core';
import { Tile } from '../models/Tile';
import { UnitComponentComponent } from '../unit-component/unit.component';

@Component({
  selector: 'app-tile-component',
  imports: [UnitComponentComponent],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css',
  
})
export class TileComponentComponent {
  @Input() Tile:Tile | null = null;

  styles = [
    {backgroundColor: "#d7c3aa"},{backgroundColor: "black"},{backgroundColor: "#ee5c27c4"}
  ]  

  style : Signal<any> = computed(()=>this.getType()) ;

  getType(){
    console.log(this.Tile?.type)
    return this.Tile?.type == 'floor' ? this.styles[0] 
    : this.Tile?.type == 'wall' ? this.styles[1]
    : this.Tile?.type == 'hazard' ? this.styles[2]
    : this.styles[0];
  }
}
