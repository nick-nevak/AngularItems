import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import {
    ADD_ITEM, AddItem, AddItemSuccess, DELETE_ITEM, DeleteItem, DeleteItemSuccess, LOAD_ITEM, LOAD_ITEMS,
    LoadItem, LoadItems, LoadItemsSuccess, LoadItemSuccess, UPDATE_ITEM, UpdateItem, UpdateItemSuccess
} from '../actions/items';
import { Observable } from 'rxjs';
import { ItemsApi } from 'src/app/items/api/items.api';
import { ofType } from '@ngrx/effects';


@Injectable()
export class ItemsEffects {

    @Effect()
    addItem: Observable<Action> = this.actions
        .pipe(
            ofType<AddItem>(ADD_ITEM),
            map(action => action.payload),
            switchMap(item => this.itemsApi.createItem(item)),
            map(item => new AddItemSuccess(item))
        );

    @Effect()
    deleteItem: Observable<Action> = this.actions
        .pipe(
            ofType<DeleteItem>(DELETE_ITEM),
            map(action => action.payload),
            switchMap(item => this.itemsApi.deleteItem(item)),
            map(item => new DeleteItemSuccess(item))
        );

    @Effect()
    loadItems: Observable<Action> = this.actions
        .pipe(
            ofType<LoadItems>(LOAD_ITEMS),
            switchMap(() => this.itemsApi.getItems()),
            map(items => new LoadItemsSuccess(items))
        );

    // @Effect()
    // loadItem: Observable<Action> = this.actions
    //     .pipe(
    //         ofType<LoadItem>(LOAD_ITEM),
    //         map(action => action.payload),
    //         switchMap(payload => this.itemsApi.getItem(payload.id)),
    //         map(item => new LoadItemSuccess(item))
    //     );

    @Effect()
    updateItem: Observable<Action> = this.actions
        .pipe(
            ofType<UpdateItem>(UPDATE_ITEM),
            map(action => action.payload),
            switchMap(item => this.itemsApi.updateItem(item)),
            map(item => new UpdateItemSuccess(item))
        );

    constructor(private actions: Actions,
                private itemsApi: ItemsApi) {
    }

}
