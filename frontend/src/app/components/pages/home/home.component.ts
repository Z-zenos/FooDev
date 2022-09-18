import { Component, OnInit } from '@angular/core';
import {Food} from "../../../share/models/food.model";
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private _foodService: FoodService) {
    this.foods = this._foodService.getAllFoods();
  }

  ngOnInit(): void {
  }

}
