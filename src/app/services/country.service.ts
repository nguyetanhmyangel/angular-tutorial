import { Injectable } from '@angular/core';
import { Country } from './country'

// const COUNTRIES: Country[] = [
//   {"id": "1", "name":"India"},
//   {"id": "2", "name":"USA"},
//   {"id": "3", "name":"England"}
// ];

const COUNTRIES: Country[] = [
  new Country('1', "India"),
  new Country('2', 'USA'),
  new Country('3', 'England')
];

@Injectable({
    providedIn: 'root'
})
export class CountryService{
	getAllCountries(): Country[] {
		return COUNTRIES;
	}
}
