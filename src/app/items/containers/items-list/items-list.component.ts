import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsFacade } from '../../items-facade';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items$: Observable<Item[]>;
  newItem: Item = { id: 0, name: '', description: '' };
  isUpdating$: Observable<boolean>;

  constructor(private itemsFacade: ItemsFacade) {
    this.isUpdating$ = itemsFacade.isUpdating$();
  }

  ngOnInit() {
    this.itemsFacade.loadItems().subscribe();
    this.items$ = this.itemsFacade.getItems$();
  }

  addItem(item: Item) {
    this.itemsFacade.addItem(item);
  }

  updateItem(item: Item) {
    this.itemsFacade.updateItem(item);
  }
}
