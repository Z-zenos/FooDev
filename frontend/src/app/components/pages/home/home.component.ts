import { Component, OnInit } from '@angular/core';
import {Food} from "../../../share/models/food.model";
import {FoodService} from "../../../services/food.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";

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
    /*
      Get the observables of these values then we need to subscribe
      to it and set this.foods
      If we don't use this variable, we need to subscribe to each
      of these items separately that makes the code a little messy
    */
    let foodsObservable: Observable<Food[]>;

    this._activatedRoute.params.subscribe((params: Params) => {
      const searchTerm = params['searchTerm'];
      const tag = params['tag'];

      // params.searchTerm -> Error: property 'searchTerm' comes from an index signature... -> Use params['searchTerm'] or disable this error from tsconfig.json: noPropertyAccessFromIndexSignature: false
      if(searchTerm) {
        foodsObservable = this._foodService.getAllFoodsBySearch(searchTerm);
      }
      else if(tag) {
        foodsObservable = this._foodService.getAllFoodsByTag(tag);
      }
      else {
        foodsObservable = this._foodService.getAllFoods();
      }
      foodsObservable.subscribe(foods => {
        // @ts-ignore
        this.foods = foods['data'].foods;
      });

    });
  }

  ngOnInit(): void {
  }

}
