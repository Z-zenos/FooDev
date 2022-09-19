import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe((params: Params) => {
      const searchTerm = params['searchTerm'];

      // Read data from the route and show it inside the search box
      if(searchTerm) {
        this.searchTerm = searchTerm;
      }
    });
  }

  ngOnInit(): void {
  }

  search(term: string): void {
    // Send data to the route. If your search for something and press enter, you need to see it inside the route.
    if(term) {
      this._router?.navigateByUrl(`/search/${term}`);
    }
  }

}
