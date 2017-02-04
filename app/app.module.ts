import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	RouterModule.forRoot([
	  {
		path: '',
		redirectTo: '/dashboard',
		 pathMatch: 'full'
		},
      {
        path: 'heroes',
        component: HeroesComponent
      },
	  {
		path: 'dashboard',
		component: DashboardComponent
	  },
	  {
		path: 'detail/:id',
		component: HeroDetailComponent
	  },
    ])
  ],
  declarations: [
    AppComponent,
	DashboardComponent,
    HeroDetailComponent,
	HeroesComponent
  ],
  providers: [
	HeroService,
	{provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { 

}