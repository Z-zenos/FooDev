import { Component, OnInit } from '@angular/core';
import {Tag} from "../../../share/models/tag.model";
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  constructor(
    private _foodService: FoodService
  ) {
    this._foodService.getAllTags().subscribe(tags => {
      // @ts-ignore
      this.tags = tags['data'].tags
    });
  }

  ngOnInit(): void {
  }

}
