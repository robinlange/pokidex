import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'abilitiesConvert'
})
export class AbilitiesConvertPipe implements PipeTransform {
  transform(abilities: {
              ability: {
                name: string;
                url: string;
              };
              is_hidden: boolean;
              slot: number;
            }[]
  ): string {
    const abilityNames = abilities.map(ability => {
      return ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1);
    });
    return abilityNames.join(", ");
  }
}
