import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionInputComponent } from './conversion-input.component';

describe('ConversionInputComponent', () => {
  let component: ConversionInputComponent;
  let fixture: ComponentFixture<ConversionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversionInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
