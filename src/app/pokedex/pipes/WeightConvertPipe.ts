import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'weightConvert'
})
export class WeightConvertPipe implements PipeTransform {
  transform(weight: number): string {
    const weightKg: number = (weight / 10);
    const weightLbs: number = (weightKg * 2.2046);
    return `${weightLbs.toFixed(1)} lbs (${weightKg.toFixed(1)} kg)`;
  }
}
