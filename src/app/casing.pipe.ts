import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casing'
})
export class Casing implements PipeTransform {
  transform(text: string, ...args: any[]) {
    return text
      .split(' ')
      .map(word => {
        if (!word) return word;
        if (word.startsWith('the')) return 'The';
        if (word === 'the' || word === 'of') return word;
        return [...word[0].toUpperCase(), ...word.slice(1)].join('');
      })
      .join(' ');
  }
}
