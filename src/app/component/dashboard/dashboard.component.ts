import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { UserIdentifier } from 'src/app/models/user-identifier';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { NotesService } from 'src/app/service/notes.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/service/data.service';
import { ViewserviceService } from 'src/app/service/viewservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  isGrid = true;
  Label: any;
  token: string;
  constructor(
    private userService: UserService,
    private noteService: NotesService,
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private viewService: ViewserviceService
    ) {

   }
  ngOnInit() {
   
   }

   notes() {
     this.router.navigateByUrl('/dashboard/notes');
   }

   reminderNote() {
    this.router.navigateByUrl('/dashboard/reminder');
   }
   archivedNotes() {
    this.router.navigateByUrl('/dashboard/archivednotes');
   }
   trashNotes() {
     this.router.navigateByUrl('/dashboard/trashnotes');
     }

      logout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
      }

      changeView() {
        this.isGrid = !this.isGrid;
        this.viewService.changeView();
        }
}
