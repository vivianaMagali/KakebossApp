/** BASIC MODULES */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/** FIREBASE MODULES */

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from './services/utils/firebase';

/** ANGULAR MATERIAL MODULES */

import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

/** OUR COMPONENTS */

import { frontUUComponent } from './components/frontUnloggedUser/frontUnloggedUser.component';
import { frontIncomesComponent } from './components/frontincomes/frontincomes.component';
import { frontExpensesComponent } from './components/frontexpenses/frontexpenses.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignoutComponent } from './components/signout/signout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { quiz } from './components/quiz/quiz.component'
import { UserService } from './services/userService';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BalanceComponent } from './components/balance/balance.component';
import { ExpectationsComponent } from './components/expectations/expectations.component';
import { DialogComponent } from './components/dialog/dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    frontIncomesComponent,
    frontExpensesComponent,
    LoginComponent,
    ExpensesComponent,
    SignupComponent,
    IncomesComponent,
    SignoutComponent,
    UserProfileComponent,
    MainComponent,
    ToolbarComponent,
    frontUUComponent,
    BalanceComponent,
    ExpectationsComponent,
    quiz,
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
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
  ],
  exports: [
    MatFormFieldModule,
    MatRadioModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
