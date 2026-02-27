import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameEngineComponentComponent } from './game-engine-component/game-engine.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GameEngineComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NeonCyberSiege';
}
