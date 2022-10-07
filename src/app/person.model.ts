import {Name} from './name.model';
import {Address} from './address.model';
export class Person {
  constructor(public id:number, public pname:Name,
    public dob:Date, public address:Address) {
}
}
