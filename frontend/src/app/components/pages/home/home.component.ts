import { Component, OnInit } from '@angular/core';
import {Food} from "../../../share/models/food.model";
import {FoodService} from "../../../services/food.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private _foodService: FoodService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe((params: Params) => {
      const searchTerm = params['searchTerm'];
      const tag = params['tag'];

      // params.searchTerm -> Error: property 'searchTerm' comes from an index signature... -> Use params['searchTerm'] or disable this error from tsconfig.json: noPropertyAccessFromIndexSignature: false
      if(searchTerm) {
        this.foods = this._foodService.getAllFoodsBySearch(searchTerm);
      }
      else if(tag) {
        this.foods = this._foodService.getAllFoodsByTag(tag);
      }
      else {
        this.foods = this._foodService.getAllFoods();
      }
    });
  }

  ngOnInit(): void {
  }

}
