import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionOutputComponent } from './conversion-output.component';

describe('ConversionOutputComponent', () => {
  let component: ConversionOutputComponent;
  let fixture: ComponentFixture<ConversionOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversionOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversionOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
