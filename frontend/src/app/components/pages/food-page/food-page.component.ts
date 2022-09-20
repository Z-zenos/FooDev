import { Component, OnInit } from '@angular/core';
import {FoodService} from "../../../services/food.service";
import {Food} from "../../../share/models/food.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(
    private _foodService: FoodService,
    private _activatedRoute: ActivatedRoute

  ) {
    this._activatedRoute.params.subscribe((params: Params) => {
      const foodId = params['id'];
      if(foodId) {
        this.food = this._foodService.getFoodById(foodId);
      }
      else {
        console.error('ERROR: No food found matching id');
      }
    });
  }

  ngOnInit(): void {
  }

  addToCart() {

  }

}
