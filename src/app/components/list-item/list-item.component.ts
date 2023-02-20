import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit{
  @Input('item') item!:Item;
  @Input('allCartItems') allCartItems!:Cart[];

  constructor(private cartService:CartService,private router:Router){

  }
  ngOnInit(): void {
    
  }
  addToDetail(item:any){
    this.cartService.AddtoDetail(item)
  }
  showDetails(){
    this.cartService.addCartItemList(this.allCartItems)
    this.router.navigate(['/detail',this.item])
  }

}
