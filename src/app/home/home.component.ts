import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ApiclientService } from '../apiclient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoryList: Category[];
  discover: String = 'Discover';

  constructor(private apiservice: ApiclientService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(): void {
    this.apiservice.getCategoryList()
      .subscribe(resp => {
        this.categoryList = resp;
      });
  }
}
