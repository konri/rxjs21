import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {MessageFirebaseService} from '../shared/services/MessageFirebase.service';
import {Message} from '../shared/objects/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: Observable<any>;
  senderId$ = 'Test sender 1';
  message: any;

  constructor(
      private mfs: MessageFirebaseService
  ) {
    this.items = mfs.getMessages();
  }
}
