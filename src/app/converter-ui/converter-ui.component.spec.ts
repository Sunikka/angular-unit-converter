import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterUiComponent } from './converter-ui.component';

describe('ConverterUiComponent', () => {
  let component: ConverterUiComponent;
  let fixture: ComponentFixture<ConverterUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConverterUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConverterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
