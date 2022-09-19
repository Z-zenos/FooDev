import { Injectable } from '@angular/core';
import {Food} from "../share/models/food.model";
import {sample_food, sample_tags} from "../../data";
import {Tag} from "../share/models/tag.model";

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

  getAllFoodsBySearch(search: string) {
    return this.getAllFoods().filter(f => f.name.toLowerCase().includes(search.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === 'All' ?
      this.getAllFoods() :
      this.getAllFoods().filter(f => f.tags?.includes(tag));
  }
}
