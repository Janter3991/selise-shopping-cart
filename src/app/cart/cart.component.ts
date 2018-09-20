import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

totalCost = 0;

  constructor(private is:ItemService) {}

  ngOnInit() {
  }
  removeFromCart(i){
    this.is.cart.splice(i,1);
  }

  getTotalCost(){
    this.is.cart.forEach((entry)=>{
    this.totalCost = this.totalCost + entry.cost;
    });
    return this.totalCost;
  }
}
