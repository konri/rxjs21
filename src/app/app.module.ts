import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { MessageItemComponent } from '../components/message-item/message-item.component';
import {MessageFirebaseService} from '../shared/services/MessageFirebase.service';
// import {ProductRepository, FireBaseProductRepository} from '../services/MessageService';


@NgModule({
  declarations: [
    AppComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
      MessageFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
