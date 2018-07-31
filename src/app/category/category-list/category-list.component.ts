import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Category} from '../category';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  private categories: Category[] = [];
  private displayedColumns: string[] = ['category', 'edit', 'delete'];

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  addNewCategory() {
    this.router.navigate(['/category-add']);
  }

  deleteCategory(id: string) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.getCategories();
    });
  }

  editCategory(id: string) {
    this.router.navigate(['/category-edit', id]);
  }

}
