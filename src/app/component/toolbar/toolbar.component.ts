import { Component, OnInit, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { NotesService } from 'src/app/service/notes.service';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { formatDate } from '@angular/common';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  @Input() note: any;

  popup = false;
 labelList: [];
 inputdata = '';
 labelForm: FormGroup;

  public dateTime: any;

  colors =
    
    [
   
      [{ name: 'Blue', value: 'blue' }, { name: 'green', value: 'green' }, { name: 'Yellow', value: 'yellow' }, { name: 'skyblue', value: 'skyblue' }],
    
      [{ name: 'Brown', value: 'brown' }, { name: 'orange', value: 'orange' }, { name: 'pink', value: 'pink' }, { name: 'white', value: 'white' }],
  
      [{ name: 'lightblue', value: 'lightblue' }, { name: 'red', value: 'red' }, { name: 'aqua', value: 'aqua' }, { name: 'silver', value: 'silver' }]
    ];
  constructor(
    private noteService: NotesService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  changeColor(color: any, notes: any) {
    this.noteService.changeColor('user/notes/change-color/' + color + '?noteId=' + notes.id).subscribe(
      (response) => {
        console.log();
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

  reminder(selectedDateTime, noteId: any) {
    const data = '';
    console.log(selectedDateTime);
    console.log(this.dateTime);
    const dateNow = new Date();
    let today: any;

    if (selectedDateTime == 'today') {
      today = formatDate(dateNow, 'yyyy-MM-ddT20:00:00', 'en-IND', '+5:30');
      console.log('todays DateTime : ', today);
    } else if (selectedDateTime == 'tomorrow') {
      today = formatDate(dateNow.setDate(dateNow.getDate() + 1), 'yyyy-MM-ddT08:00:00', 'en-IND', '+5:30');
      console.log('tomorrow DateTime : ', today);
    } else if (selectedDateTime == 'next-week') {
      today = formatDate(dateNow.setDate(dateNow.getDate() + 7), 'yyyy-MM-ddT20:00:00', 'en-IND', '+5:30');
    } else {
      today = formatDate(this.dateTime, 'yyyy-MM-ddTHH:MM:SS', 'en-IND', '+5:30');
      console.log('Selecting dateTime : ', today);

    }
  }
}
