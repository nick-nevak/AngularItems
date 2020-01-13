import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsBoardComponent } from './containers/items-board/items-board.component';


const routes: Routes = [
    { path: 'items',  component: ItemsBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
