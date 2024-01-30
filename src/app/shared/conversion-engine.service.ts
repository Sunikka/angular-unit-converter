import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { ConverterCategoryDef } from './converter-category-def.class';

@Injectable({
  providedIn: 'root'
})
export class ConversionEngineService {

  // Supported conversions
  weightDefs: ConversionDef[] = [
    new ConversionDef("kgs to lbs",2.20462262, 0, 0, "kg", "lbs"),
    new ConversionDef("lbs to kg",1/2.20462262,0,0, "lbs", "kg"),
  ]

  temperatureDefs: ConversionDef[] = [
    new ConversionDef("Celsius to Fahrenheit", 9/5,0,32,"°C", "F"),
    new ConversionDef("Fahrenheit to Celsius", 5/9,-32,0,"F", "°C"),
  ]

  distanceDefs: ConversionDef[] = [
    new ConversionDef("km to mile",1/1.609344, 0, 0, "km", "miles"),
    new ConversionDef("miles to km",1.609344, 0, 0, "mile", "km"),
    new ConversionDef("meters to feet",3.2808399 , 0, 0, "m", "ft"),
  ]

  currencyDefs: ConversionDef[] = [
    new ConversionDef("€ to $", 1.09, 0, 0, "€", "$"),
    new ConversionDef("$ to €", 1/1.09, 0, 0, "$","€")
  ]

  converterCategoryDefs: ConverterCategoryDef[] = [
    new ConverterCategoryDef("Weight","scale",this.weightDefs),
    new ConverterCategoryDef("Temperature","thermostat",this.temperatureDefs),
    new ConverterCategoryDef("Distance","directions_car",this.distanceDefs),
    new ConverterCategoryDef("Currency", "money", this.currencyDefs)
  ]

  constructor() {}

  getConverterCategoryDefs() {
    return this.converterCategoryDefs;
  }

  findCategoryIndex(name:string) {
    for(let i = 0; i < this.converterCategoryDefs.length; i++) {
      if(name === this.converterCategoryDefs[i].name) {
        return i;
      }
    }
    return -1;
  }

  findConversionIndex(catName: string, convName : string) : number {
    if(catName === "") return -1;
    let catIdx = this.findCategoryIndex(catName);
    if(catIdx === -1) return -1;
    let conversionDefs = this.converterCategoryDefs[catIdx].conversions;
    for( let i = 0; i < conversionDefs.length; i++) {
      if(convName === conversionDefs[i].name) {
        return i;
      }
    }
    console.log("Conversion not found");
    return -1;
  }

  getConversionDefs(catName: string) : ConversionDef[] {
    let idx = this.findCategoryIndex(catName);
    return this.converterCategoryDefs[idx].conversions;
  }

  getCurrentConversionDef(catName: string, convName: string): ConversionDef | null{
    let catIdx = this.findCategoryIndex(catName);
    let convIdx = this.findConversionIndex(catName, convName);
    if(catIdx >= 0 && convIdx >= 0) {
      return this.converterCategoryDefs[catIdx].conversions[convIdx]
    }
    return null;
  } 

  convertValue(catName: string, convName: string, value: number) : string  {
    let currentConverter = this.getCurrentConversionDef(catName, convName);
    if(currentConverter != null) {
      let outValue = ((value + currentConverter.preOffset) * currentConverter.coeff + currentConverter.postOffset).toFixed(4);
      return outValue;
    }
    return ""
  }
}
 