import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Message} from '../objects/Message';
import {MessageFirebaseServiceAbstract} from './MessageFirebase.service.abstract';

@Injectable()
export class MessageFirebaseService extends MessageFirebaseServiceAbstract {
    private messages: AngularFireList<Message>;
    private messages$: Observable<Message[]>;
    private links$: Observable<Message[]>;
    private videos$: Observable<Message[]>;

    constructor(
        private db: AngularFireDatabase,
    ) {
        super();
        this.messages = db.list('messages');
        this.messages$ = this.messages
            .snapshotChanges()
            .map(messages => messages
                .map(msg => new Message(Object.assign({id: msg.payload.key}, msg.payload.val())))
            );

        this.links$ = this.getMessages()
        .map(messages => messages
          .filter((message) => {
            return message.getLink() !== null;
          })
        );

        this.videos$ = this.getMessages()
        .map(messages => messages
          .filter((message) => {
             return message.getSsYoutube() === true;
          })
        );
    }

    public getMessages(): Observable<Message[]> {
        return this.messages$;
    }

    public addMessage(message: Message): Observable<Message> {
        return Observable.fromPromise(this.messages.push(message.toObject()));
    }

    public deleteMessage(message: Message): Observable<void> {
        return Observable.fromPromise<void>(this.messages.remove(message.getId()));
    }

    public getLastMessages(
      isLink: boolean,
      number: number
    ): Observable<Message[]> {
      return (isLink) ? this.links$ : this.videos$
      .takeLast(number);
    }
}
