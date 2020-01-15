import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import {
    ADD_POWER, AddPower, AddPowerSuccess, DELETE_POWER, DeletePower, DeletePowerSuccess, LOAD_POWER, LOAD_POWERS,
    LoadPower, LoadPowers, LoadPowersSuccess, LoadPowerSuccess, UPDATE_POWER, UpdatePower, UpdatePowerSuccess
} from '../actions/items';
import { Observable } from 'rxjs';
import { ItemsApi } from 'src/app/items/api/items.api';
import { ofType } from '@ngrx/effects';


@Injectable()
export class PowersEffects {

    @Effect()
    addPowerTEST: Observable<Action> = this.actions
        .pipe(
            ofType<AddPower>(ADD_POWER),
            map(action => action.payload),
            switchMap(power => this.itemsApi.createItem(power)),
            map(power => new AddPowerSuccess(power))
        );

    @Effect()
    addPower: Observable<Action> = this.actions
        .pipe(
            ofType<AddPower>(ADD_POWER),
            map(action => action.payload),
            switchMap(power => this.itemsApi.createItem(power)),
            map(power => new AddPowerSuccess(power))
        );

    @Effect()
    deletePower: Observable<Action> = this.actions
        .pipe(
            ofType<DeletePower>(DELETE_POWER),
            map(action => action.payload),
            switchMap(power => this.itemsApi.deleteItem(power)),
            map(power => new DeletePowerSuccess(power))
        );

    @Effect()
    loadPowers: Observable<Action> = this.actions
        .pipe(
            ofType<LoadPowers>(LOAD_POWERS),
            switchMap(() => this.itemsApi.getItems()),
            map(powers => new LoadPowersSuccess(powers))
        );

    // @Effect()
    // loadPower: Observable<Action> = this.actions
    //     .pipe(
    //         ofType<LoadPower>(LOAD_POWER),
    //         map(action => action.payload),
    //         switchMap(payload => this.itemsApi.getPower(payload.id)),
    //         map(power => new LoadPowerSuccess(power))
    //     );

    @Effect()
    updatePower: Observable<Action> = this.actions
        .pipe(
            ofType<UpdatePower>(UPDATE_POWER),
            map(action => action.payload),
            switchMap(power => this.itemsApi.updateItem(power)),
            map(power => new UpdatePowerSuccess(power))
        );

    constructor(private actions: Actions,
                private itemsApi: ItemsApi) {
    }

}
