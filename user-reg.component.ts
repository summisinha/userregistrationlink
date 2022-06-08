import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  user:User =new User();

  constructor(private userregisterservice: UserregisterService) { }

  ngOnInit(): void {
  }

  UserReg(){
    console.log(this.user)
this.userregisterservice.LoginUser(this.user).subscribe(data1=>{
  alert("Registered Successfully")
},error=> alert("Sorry, please enter correct details"))


  }

}
