import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './02-provide-n-get-dependencies/todos.component';
import { UserDetailsComponent } from './03-router-stub-route-param-testing/user-details.component';
import { VoterComponent } from './01-property-n-event-binding/voter.component';

import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
// import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';
import { NavComponent } from './router-link-test/nav.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TodosComponent,
		UserDetailsComponent,
		VoterComponent,
		UsersComponent,
		// NavComponent,
		HighlightDirective,
		NavComponent
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
