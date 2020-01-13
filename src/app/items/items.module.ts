import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './containers/items-list/items-list.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsFacade } from './items-facade';
import { ItemsState } from './state/items.state';
import { ItemsBoardComponent } from './containers/items-board/items-board.component';
import { ItemsApi } from './api/items.api';




@NgModule({
  declarations: [
    ItemComponent,
    ItemsListComponent,
    ItemsBoardComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule
  ],
  providers: [
    ItemsApi,
    ItemsFacade,
    ItemsState
  ]
})
export class ItemsModule { }
