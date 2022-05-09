import { UserService } from './../../shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-timing',
  templateUrl: './update-timing.component.html',
  styleUrls: ['./update-timing.component.scss']
})
export class UpdateTimingComponent implements OnInit {
  updateTimingForm: any = FormGroup;
  timing: any
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.updateTimingForm = this.fb.group({
      first_a: ['', Validators.required],
      first_j: ['', Validators.required],
      second_a: ['', Validators.required],
      second_j: ['', Validators.required],
      third_a: ['', Validators.required],
      third_j: ['', Validators.required],
      fourth_a: ['', Validators.required],
      fourth_j: ['', Validators.required],
      fifth_a: ['', Validators.required],
      fifth_j: ['', Validators.required],
    })
    this.getTiming()
  } 


  getTiming() { 
    this.userService.getTiming().subscribe(data => { 
      this.timing = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }
      })
      this.timing = this.timing[0]
      console.log(this.timing)
    })
  }

  submitTiming() { 
    // if (this.updateTimingForm.status === 'VALID') {
      this.updateTimingForm.value.id = this.timing.id
      console.log(this.updateTimingForm.value);
      this.userService.updateTiming(this.updateTimingForm.value);
    // }
  }

}
