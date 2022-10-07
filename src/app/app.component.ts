import { NodeWithI18n } from '@angular/compiler';
import { Component } from '@angular/core';
import { Address } from './address.model';
import { Name } from './name.model';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "tutorial";
  imgPath:string = 'assets/images/index.png';
  toString: string = "Angular Pipes";
  toDate: Date = new Date();
  percentNumber: number = 10.3495;
  price: number = 175.3495;
  collection: string[] = ['a', 'b', 'c', 'd'];
  myStr = "abcdefghijk";
  address1 = new Address('Dhananjaypur', 'Varanasi', 'India');
	address2 = new Address('Moonsi', 'Bhadohi', 'India');
	addressArray = [this.address1, this.address2];

	nameObj = new Name('Narendra', 'Modi');
	dob = new Date(1950, 9, 17);

	person = new Person(100, this.nameObj, this.dob, this.address1);
}





