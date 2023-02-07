import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  allItems:Item[] = [];

  constructor(private storeServie:StoreService,private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ data }) => {
      this.allItems = data
    })
  }

}
