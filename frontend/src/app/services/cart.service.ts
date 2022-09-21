import { Injectable } from '@angular/core';
import {Cart} from "../share/models/cart.model";
import {BehaviorSubject, Observable} from "rxjs";
import {Food} from "../share/models/food.model";
import {CartItem} from "../share/models/cartItem.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: Cart = this._getCartFromLocalStorage();
  private _cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this._cart);
  constructor() { }

  // Add food to the cart
  addToCart(food: Food): void {
    let cartItem = this._cart.items.find(item => item.food.id === food.id);

    if(cartItem) return;

    this._cart.items.push(new CartItem(food));
    this._setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this._cart.items = this._cart.items.filter(item => item.food.id !== foodId);
    this._setCartToLocalStorage();
  }

  calcQuantityAndPrice(foodId: string, quantity: number) {
    let cartItem = this._cart.items.find(item => item.food.id
     === foodId);

    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this._setCartToLocalStorage();
  }

  clearCart(): void {
    this._cart = new Cart();
  }

  /*
    We send it as observable because if we send the subject to the
    outside, we could be able to change the value of the subject
    from the outside of the card service -> we don't want it to happen
    because any changes to the cart should happen inside the cart service
  */
  getCartObservable(): Observable<Cart> {
    return this._cartSubject.asObservable();
  }

  getCart(): Cart {
    return this._cartSubject.value;
  }

  /*
    We are defining a new cart on the memory and anytime we refresh
    the page inside the browser, the cart will be removed and will
    be empty.
    Solution for keeping your data persistent inside the browser is
    using localStorage
  * */
  private _setCartToLocalStorage(): void {
    this._cart.totalPrice = this._cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);

    this._cart.totalCount = this._cart.items.reduce((prevCount, currentItem) => prevCount + currentItem.quantity, 0);

    const cartJSON = JSON.stringify(this._cart);
    localStorage.setItem('Cart', cartJSON);

    /*
      When we set something to the localStorage, it means we are changing
      the cart, so anybody who's listening to the cart observable
      should be notified all the listeners of the cart observable.
    * */
    this._cartSubject.next(this._cart);
  }

  private _getCartFromLocalStorage(): Cart {
    const cartJSON = localStorage.getItem('Cart');
    return cartJSON ? JSON.parse(cartJSON) : new Cart();
  }
}
