import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelComponentComponent } from './side-panel.component';

describe('SidePanelComponentComponent', () => {
  let component: SidePanelComponentComponent;
  let fixture: ComponentFixture<SidePanelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanelComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidePanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
