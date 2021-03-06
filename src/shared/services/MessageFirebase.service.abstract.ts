import {Message} from '../objects/Message';
import {Observable} from 'rxjs/Observable';

export abstract class MessageFirebaseServiceAbstract {
    public abstract getMessages(): Observable<Message[]>;
    public abstract addMessage(message: Message): Observable<Message>;
    public abstract deleteMessage(message: Message): Observable<void>;
    public abstract getLastMessages(isLink: boolean,
                                    number: number): Observable<Message[]>;
}
