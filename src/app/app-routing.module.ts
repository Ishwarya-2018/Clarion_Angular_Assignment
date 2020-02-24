import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotesComponent } from './component/notes/notes.component';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardComponent,
  children: [
     {path: '', component: NotesComponent},
     {path: 'notes', component: NotesComponent },
   ]
},
  {path: 'create-note', component: CreateNoteComponent },
  {path: 'toolbar', component: ToolbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  RegistrationComponent,
  DashboardComponent
   ];
