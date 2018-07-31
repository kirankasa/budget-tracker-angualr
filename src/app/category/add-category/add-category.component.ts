import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {ActivatedRoute, Router} from '@angular/router';
import {Transaction} from '../../transaction/transaction';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private  router: Router,
              private route: ActivatedRoute) {
  }

  private category: Category = new Category();

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.categoryService.getCategory(id).subscribe((category: Category) => {
          if (category) {
            this.category = category;
          }
        });
      }

    });
  }

  addCategory(category: Category) {
    this.categoryService.addCategory(category).subscribe(cat => {
      this.goToCategoryList();
    });
  }

  cancel() {
    this.goToCategoryList();
  }

  goToCategoryList() {
    this.router.navigate(['/category-list']);
  }

}
