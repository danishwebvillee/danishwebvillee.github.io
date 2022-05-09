import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.scss']
})
export class TimingComponent implements OnInit {
  timing:any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
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

}
