import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../../share/models/cart.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;
  constructor(private _cartService: CartService) {
    this._cartService.getCartObservable().subscribe((newCart: Cart) => {
      this.cartQuantity = newCart.totalCount;
    });
  }

  ngOnInit(): void {
  }

}
