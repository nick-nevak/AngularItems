import { Item } from 'src/app/items/models/item';


export interface ItemState {
    items: Item[];
}

export const initialItemState: ItemState = {
    items: null
};
