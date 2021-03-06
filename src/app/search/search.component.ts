import { Component, OnInit, Injectable } from '@angular/core';
import { SearchService, ProductResponse } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
@Injectable()
export class SearchComponent implements OnInit {
  loading: boolean = false;
  results: ProductResponse | undefined;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchDone(results: ProductResponse) {
    this.results = results;
    console.log("Got results", this.hasResults());
    this.loading = false;
  }

  hasResults() {
    return this.results && this.results.data.length > 0;
  }

  search(query:string) {
    console.log("SearchComponent: search ",query);
    this.loading = true;
    this.results = undefined;
    this.searchService.search(query).then(
      (r) => this.searchDone(r),
      (e) => console.error("Cannot load results",e)
    );
  }

  order(product_id:string) {
    console.log("order",product_id);
  }

}
