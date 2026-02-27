import { Component, EventEmitter, Output, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-top-bar-component',
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponentComponent {
  @Output() dimensionChangedEvent: EventEmitter<number> = new EventEmitter<number>();
  provisionalDim: number = 3;
  updateDimension(event: Event): void{
    this.provisionalDim = Number((event.target as HTMLInputElement).value);
  }
  propagate():void{
    this.dimensionChangedEvent.emit(this.provisionalDim);
  }
}
