import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { ItemService } from './item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchText:string;
  itemType:string;

  constructor(private us:UserService, private router:Router, private is:ItemService) {}
  logOut(){
    this.us.user = {};
    this.router.navigate(['store']);
  }
  searchItem(text?,type?){
    this.is.search = text;
    this.is.itemType = type;
    console.log(text,type);
  }
}
