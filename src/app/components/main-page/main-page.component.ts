import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { Item } from 'src/app/models/item.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  @Output() cartCountEvent = new EventEmitter<number>();
  isLoading = false;
  allItems:Item[] = [];
  public allCartItems:Cart[]=[];

  constructor(private storeServie:StoreService,private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.isLoading = true;
    this.activatedRoute.data.subscribe(({ itemData,cartData }) => {
      this.allItems = itemData;
      this.allCartItems = cartData;
      console.log(this.allCartItems)
      this.isLoading = false;
    })
    this.cartItemCount(this.allCartItems.length);
  }

  filterItems(category: number){
    this.isLoading = true;
    this.storeServie.filterItems(category).subscribe((response)=>{
      this.allItems = response;
      this.isLoading = false;
    })
  }

  cartItemCount(value: number) {
    this.cartCountEvent.emit(value);
  }

}
