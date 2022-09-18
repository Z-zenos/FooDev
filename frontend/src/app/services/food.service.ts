import { Injectable } from '@angular/core';
import {Food} from "../share/models/food.model";
import {sample_food} from "../../data";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  // Get all the foods from data.ts file
  // In the future, this feature should be connected to the backend server and get data from mongoDB
  getAllFoods(): Food[] {
    return sample_food;
  }
}
