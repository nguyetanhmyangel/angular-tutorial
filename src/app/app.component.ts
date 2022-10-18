import { Component, ViewChild, ElementRef, OnInit, Injectable, OnChanges } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Contact } from './services/contact';
import { ContactService } from './services/contact.service';
import { Country } from './services/country';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template driven forms';
  countryList!: Country[];
  contactList!: Contact[];
  contact!: Contact;

  @ViewChild('contactForm') contactForm!: NgForm;


  constructor(private countryService: CountryService, private contactService: ContactService) {
  }

  ngOnInit() {
    this.countryList = this.countryService.getAllCountries();
    this.contact = this.contactService.getAllContacts();
    this.contact = this.contactService.getAllContacts();
  }

  onSubmit() {
    console.log(this.contact);
  }

  setDefaults() {
    console.log(this.contact);
    this.contact = this.contactService.getAllContacts();
    console.log(this.contactService.getAllContacts());
    // this.contact = {
    //   firstName: "Tests",
    //   lastName: "Tendulkar",
    //   email: "sachin@gmail.com",
    //   gender: "male",
    //   isMarried: true,
    //   country: "2",
    //   address: { city: "Mumbai", street: "Perry Cross Rd", pinCode: "400050" }
    // };
  }

  changeCountry() {
    this.contact.country = "1";
  }

  reset(contactForm :NgForm) {
    contactForm.resetForm();
  }

}
