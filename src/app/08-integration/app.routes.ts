import { HomeComponent } from './home/home.component';
import { TodosComponent } from './02-provide-n-get-dependencies/todos.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './03-router-stub-route-param-testing/user-details.component';

export const routes = [
	{ path: 'users/:id', component: UserDetailsComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'todos', component: TodosComponent },
	{ path: '', component: HomeComponent }
];
