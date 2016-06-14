import { Component } from '@angular/core';
import {Data} from "./Data"
import {Strings, LocaleTypes, CurrentLocale}  from "./Localization"

@Component({
	selector: 'app',
	template: '<div>' +
	'<div><input name="xyz" type="radio" (click)="currLocal.setLocale(localType.RuRu)" value="RuRu"/>RuRu</div>' +
		'<div><input name="xyz" type="radio" (click)="currLocal.setLocale(localType.EnUs)" value="EnUs"/>EnUs</div>' +
	'<h1>{{lc.test}}</h1>' +
	'<h1>{{lc.test2.default}}</h1>' +
	'<h1>{{lc.test2.text.default}}</h1>' +
	'<h1>{{lc.test2.text.innerText}}</h1>' +
		'</div>'
})

export class AppComponent{
	hello: string;
	localType = LocaleTypes;
	currLocal = CurrentLocale;
	lc = Strings;
}