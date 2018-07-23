import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Category} from "../category";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

 public categories = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories =categories;
    });
  }



}
