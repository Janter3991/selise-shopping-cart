import { Component, OnInit} from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
author:string;
category:string;
cost:number;
description:string;
name:string;
updateDate:any;

  constructor(private is:ItemService){
    this.is.allItems(true);
  }

  ngOnInit() {
  }
  addToCart(item){
    this.is.cart.push({
    author:item.author,
    category:item.category,
    cost:item.cost,
    description:item.description,
    name:item.name,
    updateDate:item.updateDate
  });
  }
}
