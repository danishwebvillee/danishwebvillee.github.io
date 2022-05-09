import { UserService } from './../../../shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  addNoteForm:any = FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) { }
  userId: any;
  notes: any[] = []
  ngOnInit(): void {
    this.userId = this.userService.userId();
    this.addNoteForm = this.fb.group({
      title: ['', [Validators.required]],
      note: ['', [Validators.required, Validators.minLength(20)]],
      time: Date()
    })
  }
  addNote() { 
    if (this.addNoteForm.status === 'VALID') { 
      this.addNoteForm.value.uid = this.userId
      this.userService.createNote(this.addNoteForm.value)
      this.addNoteForm.reset();

      console.log(this.addNoteForm, 'this.addNoteForm')
    }
  }
}
