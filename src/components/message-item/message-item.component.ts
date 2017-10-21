import { Component, Input, OnInit } from '@angular/core';
import {Message} from '../../shared/interfaces/Message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() message$: Message;
  @Input() senderId$?: string;

  constructor() { }

  ngOnInit() {

  }

}
