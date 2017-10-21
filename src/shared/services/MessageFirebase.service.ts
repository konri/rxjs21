import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Message} from '../objects/Message';
import {MessageFirebaseServiceAbstract} from './MessageFirebase.service.abstract';

@Injectable()
export class MessageFirebaseService extends MessageFirebaseServiceAbstract {
    private messages: AngularFireList<Message>;
    private messages$: Observable<Message[]>;

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
    }

    public getMessages(): Observable<Message[]> {
        return this.messages$;
    }

    public addMessage(message: Message): Observable<Message> {
        return Observable.fromPromise(this.messages.push(message));
    }

    public deleteMessage(message: Message): Observable<void> {
        return Observable.fromPromise<void>(this.messages.remove(message.getId()));
    }

    public getLastMessages(num: number): Observable<Message[]> {
        return this.messages$.takeLast(num);
    }
}
