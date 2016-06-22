///<reference path="../typings/main.d.ts" />

import { bind, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from "@angular/common"
import { ROUTER_BINDINGS, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component'

bootstrap(
	AppComponent, [
		ROUTER_BINDINGS,
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		bind(LocationStrategy).toClass(HashLocationStrategy)]);
