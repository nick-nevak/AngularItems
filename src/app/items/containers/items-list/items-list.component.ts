import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';
import { ItemsFacade } from '../../facades/items-facade';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items$: Observable<Item[]>;
  newItem: Item;
  isUpdating$: Observable<boolean>;

  constructor(private itemsFacade: ItemsFacade) {
    //this.isUpdating$ = itemsFacade.isUpdating$();
  }

  ngOnInit() {
    this.itemsFacade.loadItems();
    this.items$ = this.itemsFacade.getItems$();
  }

  createItem() {
    this.newItem = { id: 0, name: '', description: '' };
  }

  addItem(item: Item) {
    this.itemsFacade.addItem(item);
    this.cancelCreation();
  }

  cancelCreation() {
    this.newItem = undefined;
  }

  updateItem(item: Item) {
    this.itemsFacade.updateItem(item);
  }

  deleteItem(item: Item) {
    this.itemsFacade.deleteItem(item);
  }

}
