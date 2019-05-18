import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document(1, 'exam', 'answer', 'www.google.com', 'children'),
    new Document(2, 'test', 'answer', 'www.google.com', 'children'),
    new Document(3, 'quiz', 'answer', 'www.google.com', 'children')


  ];
  constructor() { }

  ngOnInit() {
  }
  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
