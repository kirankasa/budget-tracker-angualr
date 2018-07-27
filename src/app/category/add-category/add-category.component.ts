import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from "../category";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  private category: Category = new Category();

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  addCategory(category: Category){
    this.categoryService.addCategory(category).subscribe(cat =>{
     this.category =new Category();
      this.messageEvent.emit();
    });
  }

}
