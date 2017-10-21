import { Component, OnInit } from '@angular/core';
import {Message} from '../../shared/objects/Message';
import {Observable} from 'rxjs/Observable';
import {MessageFirebaseService} from '../../shared/services/MessageFirebase.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  messagesLinks$: Observable<Message[]>;
  messagesVideos$: Observable<Message[]>;

  constructor(
    private messageFirebase: MessageFirebaseService
  ) {
    this.messageFirebase = messageFirebase;
  }

  ngOnInit() {
    this.messagesLinks$ = this.messageFirebase.getLastMessages(true, 5);
    this.messagesVideos$ = this.messageFirebase.getLastMessages(false, 5);
  }

}
