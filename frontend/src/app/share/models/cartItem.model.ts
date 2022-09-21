import {Food} from "./food.model";

export class CartItem {
  quantity: number = 1;
  price: number = this.food.price;

  /*
    food!: Food;
    we don't define food property as above, then use this.food = food
    in constructor -> repetitive code
    Solution:
      + Injecting the services into components
      + Put an access modifier: public food: Food
        -> the food will be defined as a property of this class,
           and it will be accessible from the outside.
  */
  constructor(public food: Food) {
  }
}
