import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { config } from './services/utils/firebase';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ExpensesComponent } from './components/expenses/expenses.component';

import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { environment } from '../environments/environment';


import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { frontIncomesComponent } from './components/frontincomes/frontincomes.component';
import { frontExpensesComponent } from './components/frontexpenses/frontexpenses.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    frontIncomesComponent,
    frontExpensesComponent,
    LoginComponent,
    ExpensesComponent,
    SignupComponent,
    IncomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    NoopAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule

  exports: [
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
