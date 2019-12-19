import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ItemComponent } from './containers/item/item.component';
import { ProductsApi } from './api/products.api';
import { ItemsFacade } from './items-facade';
import { ItemsState } from './state/items.state';



@NgModule({
  declarations: [
    ItemComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  providers: [
    ProductsApi,
    ItemsFacade,
    ItemsState
  ]
})
export class ItemsModule { }
