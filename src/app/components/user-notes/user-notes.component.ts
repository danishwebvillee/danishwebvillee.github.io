import { ConfirmDialogComponent } from './../../shared/dialog/confirm-dialog/confirm-dialog.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { UserService } from './../../shared/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-user-notes',
  templateUrl: './user-notes.component.html',
  styleUrls: ['./user-notes.component.scss']
})
export class UserNotesComponent implements OnInit {
  constructor( private userService: UserService, public dialog: MatDialog) { }
  userId: any;
  notes: any[] = []
  spinner: boolean = false;
  ngOnInit(): void {
    this.userId = this.userService.userId();
    this.getNotes()

    this.userService.getUsers().subscribe(data => { 
      console.log(data, 'data users')
    })
  }

  editNoteDialog(id:any): void {
    const dialogRef = this.dialog.open(EditNoteComponent, {
      width: '500px',
      data: {id: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result, 'result');
    });
  }

  deleteNote(id:any) { 
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {
        html: `<h4>Delete Note</h4>
        <p>Are you sure you want to delete this note</p>
      `},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'yes') { 
        this.userService.deleteNote(id);
      }
      console.log(result, 'result');
    });
  }
 
  getNotes() { 
    this.spinner = true
    this.userService.getNotes(this.userId).subscribe(data => {
      this.spinner = false
      this.notes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }
      })
      console.log(this.notes, 'data')
    });
   
  }
}
