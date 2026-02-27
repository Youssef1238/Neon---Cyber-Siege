import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatLogComponentComponent } from './combat-log.component';

describe('CombatLogComponentComponent', () => {
  let component: CombatLogComponentComponent;
  let fixture: ComponentFixture<CombatLogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatLogComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatLogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
