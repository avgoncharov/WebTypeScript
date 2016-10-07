import { Component } from '@angular/core';
import {
	ROUTER_DIRECTIVES,
	ROUTER_BINDINGS,
	Router,
	RouteConfig } from '@angular/router-deprecated';

import { Data } from "./Data"
import { Strings, LocaleTypes, CurrentLocale } from "./localization.utils";

import { RootLinksComponent } from "./root-links.component";
import { DirectiveComponent } from "./directive.component";

@Component({
	selector: 'app',
	template:
	`<div>
		<div><input name="xyz" type="radio" (click)="currLocal.setLocale(localType.RuRu)" value="RuRu"/>RuRu</div>
		<div><input name="xyz" type="radio" (click)="currLocal.setLocale(localType.EnUs)" value="EnUs"/>EnUs</div>
		<h1>{{lc.test}}</h1>
		<h1>{{lc.test2.default}}</h1>
		<h1>{{lc.test2.text.default}}</h1>
		<h1>{{lc.test2.text.innerText}}</h1>		
	</div>
	<div>
		<input type='button' value='Click' (click)="check('/#/inin/second')"/>
	</div>
	<app-dir></app-dir>`,
	directives: [ROUTER_DIRECTIVES, DirectiveComponent]
})

@RouteConfig([
	{ path: '/inin/...', name: 'InIn', component: RootLinksComponent, useAsDefault: true }
])

export class AppComponent {
	hello: string;
	localType = LocaleTypes;
	currLocal = CurrentLocale;
	lc = Strings;

	constructor(private router: Router) {
	}

	check(path: string) {
		alert(window.location.href.replace(window.location.origin, ""));
		window.location.assign(path);
	}
}