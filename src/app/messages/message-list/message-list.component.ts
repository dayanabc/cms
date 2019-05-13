import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(1, "Test 1", "Testing msg body", "test student"),
    new Message(2, "Test 2", "Testing msg body", "test student"),
    new Message(3, "Test 3", "Testing msg body", "test student"),
    new Message(4, "Test 4", "Testing msg body", "test student")
  ]
  constructor() { }

  ngOnInit() {
  }
  onNewMessage(message: Message) {
    this.messages.push(message);
  }
}
