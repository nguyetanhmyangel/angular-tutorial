export class Contact {
  firstName!:string;
  lastName!:string;
  gender!:string;
  email!:string;
  isMarried!:boolean;
  country!:string;
  address!: {
    city: string;
    street: string;
    pinCode: string;
  };

  constructor(firstName: string, lastName: string,gender: string,email: string,isMarried: boolean,
    country: string ,address: {city: string; street: string; pinCode: string}){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.isMarried = isMarried;
    this.country = country;
    this.address = address;
  }
}
