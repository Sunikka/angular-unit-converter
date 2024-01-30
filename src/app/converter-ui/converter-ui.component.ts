import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConversionEngineService } from '../shared/conversion-engine.service';

@Component({
  selector: 'app-converter-ui',
  templateUrl: './converter-ui.component.html',
  styleUrl: './converter-ui.component.css'
})
export class ConverterUiComponent implements OnInit{
  parentForm !: FormGroup;

  constructor(private fb: FormBuilder,
    private conversionEngineService: ConversionEngineService) {}
  ngOnInit(): void {
    let converterCategoryDefs = this.conversionEngineService.getConverterCategoryDefs();
    this.parentForm = this.fb.group({
      categoryValue: new FormControl(converterCategoryDefs[0].name),
      converterValue: new FormControl(converterCategoryDefs[0].conversions[0].name),
      conversionInput: new FormControl(),
      conversionOutput: new FormControl(),
    });
  }

  onSubmit() {
    console.log(`Submit: ${JSON.stringify(this.parentForm.value)}`)
  }

}
