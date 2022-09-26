import { Injectable } from '@angular/core';
import {Food} from "../share/models/food.model";
import {Tag} from "../share/models/tag.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  FOOD_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL
} from "../share/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private _http: HttpClient) { }

  /*
    http doesn't send the raw data as Food type, it will send
    an observable, and we need to subscribe to it, after the
    connection to the backend complete, it will return us our data
    or an error
  */
  getAllFoods(): Observable<Food[]> {
    return this._http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearch(search: string): Observable<Food[]> {
    return this._http.get<Food[]>(FOODS_BY_SEARCH_URL + search);
  }

  getAllTags(): Observable<Tag[]> {
    return this._http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === 'All' ?
      this.getAllFoods() :
      this._http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId: string): Observable<Food> {
    /*
      find method could return an undefined
      -> Use coalescing operator (??) when previous part is undefined
    */
    // return this.getAllFoods().find(f => f.id === foodId) ?? new Food();

    return this._http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}
