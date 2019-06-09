import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[];
  subscription: Subscription;

  constructor(private documentsService: DocumentsService) {

  }
  ngOnInit() {
    this.documents = this.documentsService.getDocuments();
    this.subscription = this.documentsService.documentListChangedEvent
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        }
      )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
