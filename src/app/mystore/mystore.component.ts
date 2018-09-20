import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.css']
})
export class MystoreComponent implements OnInit {
  newAuthor:string;
  newItemCost:number;
  newDescription:string;
  newItemName:string;
  category:string;
  updateDate:any;
  editStatus:boolean;
  createItem = false;
  i:number;
  key:any;
  filter = [];

  constructor(private is:ItemService, private us:UserService) {
    this.is.allItems();
  }

  addNewItem(){
    this.newAuthor=this.us.user['username'];
    this.updateDate=Date.now();
      this.is.db.list('itemlist').push({
      author:this.newAuthor,
      category:this.category,
      cost:this.newItemCost,
      description:this.newDescription,
      name:this.newItemName,
      updateDate:this.updateDate,
    });
    this.is.allItems();
    this.createItem = false;
    this.clearItem();
  }

  editItem(item){
    this.createItem = true;
    this.editStatus = true;
    this.is.allItems();
    this.newAuthor=item.author;
    this.category=item.category;
    this.newItemCost=item.cost;
    this.newDescription=item.description;
    this.newItemName=item.name;
    this.updateDate=item.updateDate;
    this.key = item.id;
  }

  updateItem(){
    let _this = this;
    this.updateDate=Date.now();
      this.is.updateReference(this.key).update({
      author:this.newAuthor,
      category:this.category,
      cost:this.newItemCost,
      description:this.newDescription,
      name:this.newItemName,
      updateDate:this.updateDate
    }).then(function(snapshot){
    _this.is.allItems();
  });
  this.createItem = false;
  this.editStatus = false;
  this.clearItem();
  }
  deleteItem(item){
    this.key = item.id;
    this.is.updateReference(this.key).remove();
    this.is.allItems();
  }
  ngOnInit() {
  }
  clearItem(){
    this.newAuthor = this.category = this.newItemName = this.newDescription = this.newItemCost = this.updateDate = null;
  }

}
