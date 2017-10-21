import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AngularFirestoreCollection} from 'angularfire2/firestore';
import {Message} from '../objects/Message';
import {MessageFirebaseServiceAbstract} from './MessageFirebase.service.abstract';

@Injectable()
export class MessageFirebaseService extends MessageFirebaseServiceAbstract {
    private messageCollection: AngularFirestoreCollection<Message>;

    private messages: AngularFireList<Message>;
    constructor(
        private db: AngularFireDatabase,
    ) {
        super();
        this.messages = db.list('messages');
    }

    public getMessages(): Observable<Message[]> {
        return this.messages.valueChanges();
    }

    public createMessage(message: Message): Observable<Message> {
        return Observable.fromPromise(this.messages.push(message));
    }

    public addMessage(message: Message): Observable<Message> {
        return undefined;
    }

    public deleteMessage(message: Message): Observable<Message> {
        return undefined;
    }

    public getLastMessages(num: number): Observable<Message[]> {
        return undefined;
    }
}
