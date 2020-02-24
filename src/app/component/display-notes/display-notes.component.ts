import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { DailogboxComponent } from '../dailogbox/dailogbox.component';
import { NotesService } from 'src/app/service/notes.service';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material';
import { ViewserviceService } from 'src/app/service/viewservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() notes: any;
  userForm:FormGroup;
  users:any;
  usrflag = false;
  removable = true;
  selectable = true;
  direction = 'row';

  constructor(
    private noteService: NotesService,
    private userService: UserService,
    private viewService: ViewserviceService,
    public dialog: MatDialog
  ) { this.viewService.currentView.subscribe(
    response =>
      this.change(response)
  );}

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl('')
      }); 
  }

  change(flag: boolean) {
    if (flag) {
      this.direction = 'column';
    } else {
      this.direction = 'row';
    }
  }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(DailogboxComponent, {
      width: '450px',
      height: 'auto',
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); 
      this.getNotesForUser();
    });

  }

  getNotesForUser()
  {
    console.log("this is search user by email : "+this.userForm.value.email);
    this.noteService.getNotesForUser(localStorage.getItem('token'),this.userForm.value.email).subscribe(notes => {
      this.notes = notes;
      console.log("11",notes);
    },
      (error) => {
        console.log(error);
      });
  }

  getAllUsers()
  {
    this.userService.getAllUsers(localStorage.getItem('token')).subscribe(users =>{
       this.users = users;
       console.log('This is all users : ',users);
    },
    (error) => {
      console.log();
    });
  }
}


