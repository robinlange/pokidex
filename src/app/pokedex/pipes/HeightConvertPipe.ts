import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'heightConvert'
})
export class HeightConvertPipe implements PipeTransform {
  transform(height: number): string {
    const heightCm: number = height / 10;
    const inches: number = heightCm / 2.54;
    const feet: number = Math.floor(inches / 12);
    const remainingInches: number = inches % 12;
    return `${feet}'${remainingInches.toFixed(1)}'' (${heightCm.toFixed(2)} cm)`;
  }
}
