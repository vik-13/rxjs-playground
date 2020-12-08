import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable()
export class RouterParamsService {
  getAnimal(id: string): Observable<string> {
    return of(id).pipe(
      debounceTime(500),
      map((value: string) => `Cat-${value}`)
    );
  }

  getAnimals(): Observable<string[]> {
    return of(['Cat', 'Dog', 'Fox', 'Wolf']).pipe(
      debounceTime(500)
    );
  }
}
