import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatDialog } from '@angular/material';
import { NotesService } from 'src/app/service/notes.service';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-dailogbox',
  templateUrl: './dailogbox.component.html',
  styleUrls: ['./dailogbox.component.scss']
})
export class DailogboxComponent implements OnInit {

 notes: any;
  constructor(public dialogRef: MatDialogRef<DailogboxComponent>,
              @Inject(MAT_DIALOG_DATA) public note: any,
              private notesService: NotesService,
              private snackBar: MatSnackBar) {
                this.notes = note;
              }

  ngOnInit() {
  }
 
closeDialog() {
  console.log('Id', this.notes.id);
  console.log('note', this.note);

  // tslint:disable-next-line: max-line-length
  this.notesService.updateNote('user/notes/update_note', this.notes, localStorage.getItem('token')).subscribe( (result) => {
    console.log(result);
    this.snackBar.open('note updated', 'Ok', {duration: 3000});
    this.dialogRef.close();
},
(error) => {
  this.snackBar.open(error.error.description, 'error', {duration: 3000});
});
}

deleteNote(noteId: any) {
  this.notesService.deleteNote('user/notes/delete_note?noteId=' + noteId).subscribe(Response => {
    console.log(Response);
  },
    error => {
      console.log(error);
    }
  );
}
}
