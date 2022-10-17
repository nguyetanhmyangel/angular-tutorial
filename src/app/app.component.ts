import { Component, ViewChild, ElementRef, OnInit, Injectable } from '@angular/core';
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

  @ViewChild('contactForm') contactForm!: NgForm;


  constructor(private countryService: CountryService, private contactService: ContactService) {
  }

  ngOnInit() {
    this.countryList = this.countryService.getAllCountries();
    this.contactList = this.contactService.getAllContacts();
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }



}
