import { Injectable } from '@angular/core';
import { Contact } from './contact';

const CONTACT: Contact[] = [
  new Contact('Sachin', 'Tendulkar', 'male', 'sachin@gmail.com', true, '2',
    { city: "Mumbai", street: "Perry Cross Rd", pinCode: "400050" }
  )
];

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getAllContacts(): Contact[] {
    return CONTACT;
  }
}
