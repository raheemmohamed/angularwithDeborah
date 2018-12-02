import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'convertSpace'
})

export class ConverSpacePipes implements PipeTransform{
    transform(value :string, character:string) :string{
        return value.replace(character, ' ');
    }
}