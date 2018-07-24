import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  category= "";

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  addCategory(category: string){
    this.categoryService.addCategory(category).subscribe(cat =>{
     this.category ="";
      this.messageEvent.emit();
    });
  }

}
