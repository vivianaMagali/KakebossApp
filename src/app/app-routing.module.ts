import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { frontUUComponent } from './components/frontUnloggedUser/frontUnloggedUser.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: MainComponent},
  { path: '', component: frontUUComponent},
  { path: 'expenses', component: ExpensesComponent},
  { path: 'incomes', component: IncomesComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'inicio-sin-login', component: frontUUComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
