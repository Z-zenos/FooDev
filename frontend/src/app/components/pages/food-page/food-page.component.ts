import { Component, OnInit } from '@angular/core';
import {FoodService} from "../../../services/food.service";
import {Food} from "../../../share/models/food.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(
    private _foodService: FoodService,
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe((params: Params) => {
      const foodId = params['id'];
      if(foodId) {
        this._foodService.getFoodById(foodId).subscribe(food => {
          // @ts-ignore
          this.food = food['data'].food;
        });
      }
      else {
        console.error('ERROR: No food found matching id');
      }
    });
  }

  ngOnInit(): void {
  }

  addToCart() {
    this._cartService.addToCart(this.food);
    this._router?.navigateByUrl('/cart-page');
  }

}
