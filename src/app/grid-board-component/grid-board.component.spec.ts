import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBoardComponentComponent } from './grid-board.component';

describe('GridBoardComponentComponent', () => {
  let component: GridBoardComponentComponent;
  let fixture: ComponentFixture<GridBoardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridBoardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridBoardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
