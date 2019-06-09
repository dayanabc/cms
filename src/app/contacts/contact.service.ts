import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';
import { ContactListComponent } from './contact-list/contact-list.component';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();
  contactListChangedEvent = new Subject<Contact[]>();
  maxContactId: number;

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getMaxId(): number {
    let maxId = 0

    for (let i = 0; i < this.contacts.length; i++) {
      let currentId = +this.contacts[i].contactId;
      if (currentId < maxId) {
        maxId = currentId
      }
    }
    return maxId
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(contactId: number): Contact {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].contactId === contactId)
        return this.contacts[i];
    }
    return null;
  }

  addContact(newContact: Contact) {
    if (newContact === null) {
      return;
    }

    this.maxContactId++;
    newContact.contactId = this.maxContactId;

    this.contacts.push(newContact);
    let contactListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactListClone);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (originalContact === null || originalContact === undefined
      || newContact === null || newContact === undefined) {
      return;
    }

    let pos = this.contacts.indexOf(originalContact);
    if (pos < 0) {
      return;
    }

    newContact.contactId = originalContact.contactId;
    this.contacts[pos] = newContact;
    let contactListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactListClone);
  }

  deleteContact(contact: Contact) {
    if (document === null || contact === undefined) {
      return;
    }
    const dd = this.contacts.indexOf(contact);
    if (dd < 0) {
      return;
    }

    this.contacts.splice(dd, 1);

    let contactListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactListClone);
  }

}
