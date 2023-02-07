import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root',
})
export class ItemsResolveService implements Resolve<Item[]> {
  constructor(private storeService: StoreService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Item[] | Observable<Item[]> | Promise<Item[]> {
    let items = this.storeService.getAllItems();
    return items;
  }
}
