import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';
import { Subject } from 'rxjs';
import { unescape } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documents: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document[]>();
  documentChangedEvent = new EventEmitter<Document[]>();
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number;


  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }
  getDocument(id: number): Document {
    for (let i = 0; i < this.documents.length; i++) {
      if (this.documents[i].documentId === id)
        return this.documents[i];
    }
    return null;
  }

  getMaxId(): number {

    let maxId = 0

    for (let i = 0; i < this.documents.length; i++) {
      let currentId = +this.documents[i].documentId;
      if (currentId < maxId) {
        maxId = currentId
      }
    }
    return maxId
  }

  addDocument(newDocument: Document) {
    if (newDocument === null) {
      return;
    }
    this.maxDocumentId++;
    newDocument.documentId = this.maxDocumentId;

    this.documents.push(newDocument);
    let documentListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (originalDocument === null || originalDocument === undefined
      || newDocument === null || newDocument === undefined) {
      return;
    }

    let pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }

    newDocument.documentId = originalDocument.documentId;
    this.documents[pos] = newDocument;
    let documentListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentListClone);
  }

  deleteDocument(document: Document) {
    if (document === null || document === undefined) {
      return;
    }

    const dd = this.documents.indexOf(document);
    if (dd < 0) {
      return;
    }
    this.documents.splice(dd, 1);

    let documentListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentListClone);
  }
}