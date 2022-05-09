import { UserService } from './../../../shared/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private fb: FormBuilder, private userService: UserService) { }

  note: any;
  editNoteForm:any = FormGroup;
  userId: any;
  ngOnInit(): void {
    this.userId = this.userService.userId();
    this.editNoteForm = this.fb.group({
      title: ['', [Validators.required]],
      note: ['', [Validators.required, Validators.minLength(20)]],
      time: Date()
    })
    this.getNote()
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  updateNote() { 
    if (this.editNoteForm.status === 'VALID') { 
      this.editNoteForm.value.id = this.data.id
      this.userService.updateNote(this.editNoteForm.value)
      this.dialogRef.close();
      console.log(this.editNoteForm, 'this.editNoteForm')
    }
  }

  getNote() { 
    console.log(this.data.id, 'this.data.id')
    this.userService.getaNote(this.data.id).subscribe(data => {
      this.note = data;
      console.log(data, 'data')
    });
  }

}
