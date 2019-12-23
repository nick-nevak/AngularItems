import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './containers/item/item.component';
import { ProductListComponent } from './containers/product-list/product-list.component';


const routes: Routes = [
    { path: 'items',  component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
