import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent implements OnInit{
  @Output() newItemEvent = new EventEmitter<string>();

  catNumber=1
  
  ngOnInit(): void {
  }

  onFilter(category:string){
    // console.log(category)
    this.newItemEvent.emit(category);
  }

}
