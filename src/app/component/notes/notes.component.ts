import { Component, OnInit, Inject } from '@angular/core';
import { NotesService } from 'src/app/service/notes.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { MatDialog } from '@angular/material';
import { DailogboxComponent } from '../dailogbox/dailogbox.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes:any;
  constructor(
    private noteService: NotesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    //console.log("11",this.notes);
     this.getNotes()
  }
   
  getNotes() {
    this.noteService.getNotes(localStorage.getItem('token')).subscribe(notes => {
      this.notes = notes;
      console.log("11",notes);
    },
      (error) => {
        console.log(error);
      });
  }
}
