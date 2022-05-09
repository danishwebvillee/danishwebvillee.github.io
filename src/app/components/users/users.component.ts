import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['photoURL', 'displayName', 'email', 'isVerified', 'Action'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() { 
    this.userService.getUsers().subscribe(data => { 
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        }
      })
      console.log(this.users, 'this.users')
    })
  }
  activeDeactiveUser(id: any, type:any) {
    this.userService.activeDeactiveUser(id, type);
  }

}
