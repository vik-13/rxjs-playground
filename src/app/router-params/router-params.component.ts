import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterParamsService } from './router-params.service';
import { combineLatest, Observable } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';

interface Animals {
  list: string;
  selected: string;
}

@Component({
  selector: 'app-router-params',
  templateUrl: './router-params.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouterParamsComponent {
  animals$!: Observable<Animals>;

  constructor(private _routerParams: RouterParamsService, private _activatedRoute: ActivatedRoute) {
    console.log('init');
    this.animals$ = combineLatest([
      _activatedRoute.params.pipe(
        filter((params: Params) => !!params.id),
        switchMap((params: Params) => {
          return _routerParams.getAnimal(params.id);
        })
      ),
      _routerParams.getAnimals().pipe(
        switchMap((animals: string[]) => {
          return _activatedRoute.queryParams.pipe(
            map((params: Params) => {
              return params.filter ? animals.filter((item: string) => item !== params.filter) : animals;
            })
          );
        })
      )
    ]).pipe(
      map(([selected, list]: [string, string[]]) => ({selected, list: list.join(', ')}))
    );
  }
}
