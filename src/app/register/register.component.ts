import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUserEmail = "";
  newUserPassword = "";
  newUserPasswordConfirm = "";

  constructor() { }

  ngOnInit() {
  }

  registerUser(){
    if(
      this.newUserEmail.trim() === '' ||
      this.newUserPassword.trim() === '' ||
      this.newUserPasswordConfirm.trim() === '' ||
      this.newUserPassword.trim() !== this.newUserPasswordConfirm.trim()
    ){
      console.log("you didnt complete the form correctly")
      return;
    }
    console.log('newUser Email is:', this.newUserEmail);
    console.log('newUser Password is:', this.newUserPassword);
    console.log('newUser Confirmed Password is:', this.newUserPasswordConfirm);
  }
}
