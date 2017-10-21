import {Component, Input, OnInit} from '@angular/core';
import { Message } from '../../../shared/interfaces/Message';

@Component({
  selector: 'app-side-item',
  templateUrl: './side-item.component.html',
  styleUrls: ['./side-item.component.css']
})
export class SideItemComponent implements OnInit {

  @Input() message$: Message;
  @Input() isLink?: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.isLink);
  }

}
