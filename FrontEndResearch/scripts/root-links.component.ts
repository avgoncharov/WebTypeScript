import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouteConfig } from '@angular/router-deprecated';

import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";

@Component({
	selector: 'app-inin',
	template:
	`
	<div> 
		<div>			
			<ul>
        			<li><a [routerLink]="['First']">First</a></li>
        			<li><a [routerLink]="['Second']">Second</a></li>        		
      			</ul>
			<router-outlet></router-outlet>
		</div> 
		
	</div>
	`,
	directives: [RouterOutlet, RouterLink]
})

@RouteConfig([
	{ path: '/first', name: 'First', component: FirstComponent, useAsDefault: true },
	{ path: '/second', name: 'Second', component: SecondComponent }
])


export class RootLinksComponent {
}