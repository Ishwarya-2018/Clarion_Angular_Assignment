import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserService } from './service/user.service';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StorageServiceModule} from 'angular-webstorage-service';
import {MatDividerModule} from '@angular/material/divider';
import { NotesComponent } from './component/notes/notes.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import {FormsModule} from '@angular/forms';
import { DailogboxComponent } from './component/dailogbox/dailogbox.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DisplayNotesComponent } from './component/display-notes/display-notes.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MatMenuModule} from '@angular/material/menu';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips';
import { ViewserviceService } from './service/viewservice.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent,
    NotesComponent,
    CreateNoteComponent,
    DailogboxComponent,
    DisplayNotesComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    StorageServiceModule,
    MatDividerModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FlexLayoutModule,
    MatListModule,
    MatChipsModule,

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule,
    MatIconModule
  ],
  entryComponents: [
    DailogboxComponent],
    providers: [UserService, ViewserviceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
