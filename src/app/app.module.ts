import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {MessageItemComponent } from '../components/message-item/message-item.component';
import {MessageFirebaseService} from '../shared/services/MessageFirebase.service';
import { MessageFormComponent } from '../components/message-form/message-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {SideBarComponent} from '../components/side-bar/side-bar.component';
import {SideItemComponent} from '../components/side-bar/side-item/side-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageItemComponent,
    MessageFormComponent,
    SideBarComponent,
    SideItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
      MessageFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
