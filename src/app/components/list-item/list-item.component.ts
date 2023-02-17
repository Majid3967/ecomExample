import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit{
  @Input('item') item!:Item;

  constructor(private cartService:CartService,private router:Router){

  }
  ngOnInit(): void {
    
  }
  addToDetail(item:any){
    this.cartService.AddtoDetail(item)
  }
  showDetails(){
    this.router.navigate(['/detail',this.item])
  }

}
