import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  ref: any;
  items = [];
  cart = [];
  search:string;
  itemType:string;

  constructor(public db: AngularFireDatabase, private us:UserService) {
    this.allItems();
  }

    updateReference(id){
      return this.db.database.app.database().ref(`itemlist/${id}`);
    }

   allItems(store?:boolean) {
     this.ref = this.db.database.app.database().ref('itemlist');
     this.ref.orderByKey().once('value', (snapshot) => {
      let values = snapshot.val();
      this.items = [];
      this.items = Object.keys(values).map(key => {
      values[key].id = key;
      return values[key];
    })
    .filter(item =>{
    if(!store)  {
      return item.author === this.us.user['username'];
    }
    else  {
      return true;
    }
    });
     //this.items = Object.values(snapshot.val());
     //});
    });
    }
}
