import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileComponentComponent } from './tile.component';

describe('TileComponentComponent', () => {
  let component: TileComponentComponent;
  let fixture: ComponentFixture<TileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
