import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordtonumber'
})
export class WordtonumberPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return null;
    }
    const words: string[] = value.toLowerCase().split(' ');
    for (let i = 0; i <= words.length; i++) {
      const word: string = words[i];
      switch (word) {
        case 'one': {
          words[i] = '1';
          break;
        }
        case 'two': {
          words[i] = '2';
          break;
        }
        case 'three': {
          words[i] = '3';
          break;
        }
        case 'four': {
          words[i] = '4';
          break;
        }
        case 'five': {
          words[i] = '5';
          break;
        }
      }
    }
    words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1);
    return words.join(' ');
  }

}
