import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitComponentComponent } from './unit.component';

describe('UnitComponentComponent', () => {
  let component: UnitComponentComponent;
  let fixture: ComponentFixture<UnitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
