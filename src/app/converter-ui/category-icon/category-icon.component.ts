import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from '../../shared/conversion-engine.service';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrl: './category-icon.component.css'
})
export class CategoryIconComponent implements OnInit {
  @Input() parentForm!:FormGroup;
  categoryIcon = "scale"

  constructor(private conversionEngineService: ConversionEngineService) {}
  

  ngOnInit(): void {
    this.parentForm.get("categoryValue")?.valueChanges.subscribe((value) => {
      console.log("Change icon to category: " + value)
      let catIdx = this.conversionEngineService.findCategoryIndex(value);
      this.categoryIcon = this.conversionEngineService.converterCategoryDefs[catIdx].icon
    })
  }
}
