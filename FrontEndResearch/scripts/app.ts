import { Component } from '@angular/core';
import {Data} from "./Data"

@Component({
	selector: 'app',
	template: '<h1>{{data.someData}}</h1>'
})

export class AppComponent{
	hello: string;
	data: Data;

	constructor() {
		this.data = new Data();
		this.data.someData = "! xyz !";
	}
}