/*
import {Observable} from 'rxjs/Observable';
import {Message} from '../shared/interfaces/Message';
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

export abstract class ProductRepository {
  // abstract messagesList: Observable<Message[]>;

  abstract getAll (): Observable<Message[]>;
  abstract add (product: Message): Observable<Message>;
  abstract delete (message: Message): Observable<void>;
}


@Injectable()
export class FireBaseProductRepository extends ProductRepository {
  messagesList;
  constructor(private db: AngularFireDatabase) {
    super();
    this.messagesList = db.list('messages').valueChanges();
  }
  getAll(): Observable<Message[]> {
    return undefined;
  }

  add(product: Message): Observable<Message> {
    return undefined;
  }

  delete(message: Message): Observable<void> {
    return undefined;
  }
}
*/
