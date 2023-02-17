import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent implements OnInit{
  @Output() newItemEvent = new EventEmitter<number>();
  
  ngOnInit(): void {
  }

  onFilter(category:number){
    this.newItemEvent.emit(category);
  }

}
