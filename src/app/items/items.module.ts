import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './containers/items-list/items-list.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsState } from './state/items.state';
import { ItemsBoardComponent } from './containers/items-board/items-board.component';
import { ItemsApi } from './api/items.api';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ItemsFacadeNoRx } from './facades/items-facade-no-rx';




@NgModule({
  declarations: [
    ItemComponent,
    ItemsListComponent,
    ItemsBoardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ItemsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemsApi,
    ItemsFacadeNoRx,
    ItemsState
  ]
})
export class ItemsModule { }
