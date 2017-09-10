import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'gridStackPipe'
})
@Injectable()
export class GridStackPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
