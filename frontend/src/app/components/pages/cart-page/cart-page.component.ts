import { Component, OnInit } from '@angular/core';
import {Cart} from "../../../share/models/cart.model";
import {CartService} from "../../../services/cart.service";
import {CartItem} from "../../../share/models/cartItem.model";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(
    private _cartService: CartService
  ) {
    // Get the cart observable and update this cart each time have new value
    this._cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
  }

  /*
    We should get the cartItem because we have a list of cartItem, and
    we can't decide which one we want to remove unless we get it inside
    the method
  */
  removeFromCart(cartItem: CartItem): void {
    this._cartService.removeFromCart(cartItem.food.id);
  }

  calcQuantityAndPrice(cartItem: CartItem, quantityInString: string): void {
    const quantity = parseInt(quantityInString);
    this._cartService.calcQuantityAndPrice(cartItem.food.id, quantity);
  }
}
