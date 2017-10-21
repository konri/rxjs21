/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MessageItemComponent } from './message-item.component';

describe('MessageItemComponent', () => {
  let component: MessageItemComponent;
  let fixture: ComponentFixture<MessageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
