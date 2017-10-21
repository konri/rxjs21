import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Message} from '../../shared/objects/Message';
import {environment} from '../../environments/environment';
import {MessageFirebaseService} from '../../shared/services/MessageFirebase.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input() public submitButtonText = 'Submit';
  public form: FormGroup;

  @Output() formSubmit = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private service: MessageFirebaseService) {
    this.form = formBuilder.group({
      body: [null, Validators.compose([Validators.required, this.isNotEmpty])],
      imageUrl: [null],
    });
  }

  public submitForm() {
    if (this.form.valid) {
      console.log(this.form);
      const msg = {
        id: null,
        body: this.form.value.body,
        timestamp: + new Date(),
        sender: environment.user
      };
      const message: Message = new Message(msg);
      this.service.addMessage(message);
    }
  }

  private isNotEmpty(input: FormControl) {
    const isEmpty = !!input.value && input.value.trim().length > 0;
    return isEmpty ? null : {isNotEmpty: true};
  }

  ngOnInit() {
  }

}
