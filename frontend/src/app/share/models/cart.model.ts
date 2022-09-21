import {CartItem} from "./cartItem.model";

export class Cart {
  items: CartItem[] = [];
  /*
    When you use "new" keyword to create a new instance of the Cart,
    the items will be an empty array instead of undefined.
  */
  totalPrice: number = 0;
  totalCount: number = 0;
}
