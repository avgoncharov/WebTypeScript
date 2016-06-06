///<reference path="../typings/main.d.ts" />

import { provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from "@angular/common"
import { ROUTER_PROVIDERS} from '@angular/router';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {AppComponent} from './app'

bootstrap(AppComponent, [ROUTER_PROVIDERS,HTTP_PROVIDERS]);
