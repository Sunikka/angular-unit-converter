export class ConversionDef {
    constructor(
        public name: string,

        public coeff: number,
        public preOffset: number,
        public postOffset: number,

        public inUnit : string,
        public outUnit: string,

    ) {

    }
}