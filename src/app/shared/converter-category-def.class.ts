import { ConversionDef } from "./conversion-def.class";

export class ConverterCategoryDef {
    constructor(
        public name: string,
        public icon: string,
        public conversions: ConversionDef[]
    ){}
}