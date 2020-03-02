import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User("","","","","");
  message:any ;

  constructor(private service: UserRegistrationService) { }

  ngOnInit() {
  }

  public registerProcess() {
    let response = this.service.doRegistration(this.user);
    response.subscribe((data) => this.message = data);

  }

}
