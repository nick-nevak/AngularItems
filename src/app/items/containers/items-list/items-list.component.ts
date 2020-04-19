import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';
import { ItemsFacadeNoRx } from '../../facades/items-facade-no-rx';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { GetItems } from 'src/app/store/actions/item.actions';
import { selectItemsList } from 'src/app/store/selectors/item.selectors';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items$: Observable<Item[]> = this.store.pipe(select(selectItemsList));
  newItem: Item;
  isUpdating$: Observable<boolean>;

  constructor(private itemsFacade: ItemsFacadeNoRx,
              private store: Store<AppState>) {
    //this.isUpdating$ = itemsFacade.isUpdating$();
  }

  ngOnInit() {
    this.store.dispatch(new GetItems());
  }

  // createItem() {
  //   this.newItem = { id: 0, name: '', description: '' };
  // }

  // addItem(item: Item) {
  //   this.itemsFacade.addItem(item);
  //   this.cancelCreation();
  // }

  // cancelCreation() {
  //   this.newItem = undefined;
  // }

  // updateItem(item: Item) {
  //   this.itemsFacade.updateItem(item);
  // }

  // deleteItem(item: Item) {
  //   this.itemsFacade.deleteItem(item);
  // }

}
