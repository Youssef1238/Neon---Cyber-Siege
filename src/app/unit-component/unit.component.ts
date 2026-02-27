import { Component, Input } from '@angular/core';
import { Unit } from '../models/Unit';

@Component({
  selector: 'app-unit-component',
  imports: [],
  templateUrl: './unit.component.html',
  styleUrl: './unit.component.css'
})
export class UnitComponentComponent {
  @Input() type: Unit | null = null;
}
