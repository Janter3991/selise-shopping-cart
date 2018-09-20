import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
// import { list } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ref: any;
  users = [];
  user = {};
  userExist='';

  constructor(public db: AngularFireDatabase) {
    this.allUsers();
  }

   allUsers() {
     this.ref = this.db.database.app.database().ref('loginInfo');
     this.ref.orderByKey().once('value', (snapshot) => {
     this.users = Object.values(snapshot.val());
     });
   }
}
