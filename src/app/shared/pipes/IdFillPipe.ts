import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'fill'
})
export class IdFillPipe implements PipeTransform {
  transform(value: number): string {
    const id: string = String(value).padStart(3, '0');
    return `#${id}`;
  }
}
