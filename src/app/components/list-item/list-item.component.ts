import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit{
  @Input('item') item!:Item;
  ngOnInit(): void {

    // console.log(Item)
    
  }
<<<<<<< Updated upstream
=======
  addToDetail(item:any){
    this.cartService.AddtoDetail(item)
  
  }
  showDetails(){
    console.log("hello")
    this.cartService.addCartItemList(this.allCartItems)
    this.router.navigate(['/detail',this.item])
  }
>>>>>>> Stashed changes

}
