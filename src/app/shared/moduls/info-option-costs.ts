import { Color } from "./model-car";

export class InfoOptionCosts {
    id?: number;
    description?: string;
    range?: number;
    speed?: number;
    price?: number;
    towHitch?: boolean=false;
    yoke?: boolean=false;
    estimatePrice?:number;
    color?: Color;
    model?:string;
    imgUrl?:string;
    towHitchPrice?:number;
    yokePrice?:number;
    towHitchConfig?: boolean;
    yokeConfig?: boolean;
}
