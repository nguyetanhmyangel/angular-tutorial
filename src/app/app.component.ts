import { Employee } from './employee';
import { NodeWithI18n } from '@angular/compiler';
import { Component } from '@angular/core';
import { Address } from './address.model';
import { Name } from './name.model';
import { Person } from './person.model';
import { Company } from './company';

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

  //For welcome, repeat, myjson Pipe
  employee: Employee = new Employee(1, 'Ram', 30);
  //For strformat, myuppercaseone and myuppercasetwo Pipe
	message: string = "My name is Mahesh";
	//For division Pipe
	dividend : number = 23;
	divisor : number = 7;
	//For pure and impure pipe
	compName:string = "ABCD LTD";
	compLocation:string = "Varanasi";
	company = new Company(this.compName, this.compLocation);

    //Impure change because there is no change in object reference: company
	//Impure pipe will run again and Pure pipe will do nothing.
	updateCompany() {
	   this.company.cname = this.compName;
	   this.company.location = this.compLocation;
	}

	//Pure change because there is change in object reference: company
	//Impure pipe and Pure pipe both will run again.
	createCompany() {
	   this.company = new Company(this.compName, this.compLocation);
	}

}





