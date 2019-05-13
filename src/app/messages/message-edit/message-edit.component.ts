import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subjectRef: ElementRef;
  @ViewChild('msgText') msgTextRef: ElementRef;
  @Output() newMesage = new EventEmitter<Message>();
  constructor() { }

  ngOnInit() {
  }

  onSendMessage() {
    const subjectContent = this.subjectRef.nativeElement.value;
    const msgContent = this.msgTextRef.nativeElement.value;
    const addNewMessage = new Message(1, subjectContent, msgContent, 'Dayana');
    this.newMesage.emit(addNewMessage);
    // this.subjectRef.nativeElement.value = '';
    // this.msgTextRef.nativeElement.value = '';
  }

  onClear() {
    this.subjectRef.nativeElement.value = '';
    this.msgTextRef.nativeElement.value = '';
  }

}
