import { SecureInnerPagesGuard } from './shared/secure-inner-pages.guard';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';



// Mat

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



import { HeaderComponent } from './components/header/header.component';
import { UserNotesComponent } from './components/user-notes/user-notes.component';
import { AddNoteComponent } from './components/user-notes/add-note/add-note.component';
import { EditNoteComponent } from './components/user-notes/edit-note/edit-note.component';
import { ConfirmDialogComponent } from './shared/dialog/confirm-dialog/confirm-dialog.component';
import { UsersComponent } from './components/users/users.component';
import { TimingComponent } from './components/timing/timing.component';
import { UpdateTimingComponent } from './components/update-timing/update-timing.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    UserProfileComponent,
    HeaderComponent,
    UserNotesComponent,
    AddNoteComponent,
    EditNoteComponent,
    ConfirmDialogComponent,
    UsersComponent,
    TimingComponent,
    UpdateTimingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    

    //Mat
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [AuthService, AuthGuard, SecureInnerPagesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
