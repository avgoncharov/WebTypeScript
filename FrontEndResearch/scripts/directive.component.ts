import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

@Component({
	selector: 'app-dir',
	template:
	`<div>
		Hello		
		<router-outlet></router-outlet>
	</div>`,
	directives: [ROUTER_DIRECTIVES]
})

export class DirectiveComponent {
}