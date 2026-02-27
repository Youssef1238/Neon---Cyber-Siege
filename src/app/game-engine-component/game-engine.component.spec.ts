import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEngineComponentComponent } from './game-engine.component';

describe('GameEngineComponentComponent', () => {
  let component: GameEngineComponentComponent;
  let fixture: ComponentFixture<GameEngineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameEngineComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameEngineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
