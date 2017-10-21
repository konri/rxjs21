import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  items: Observable<any>;
  senderId$ = 'Test sender 1';

  constructor(private db: AngularFireDatabase) {
    this.items = this.db.list('messages').valueChanges();
  }
}
