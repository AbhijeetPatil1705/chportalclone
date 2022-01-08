import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  userName = "";
  password = "";

 submit(newUserForm:any){
   if(newUserForm.valid) {
    alert("Form Successfully Submitted");
   } else {
     alert("Error")
   }
 }
  
 
  constructor() { }

  ngOnInit(): void {
    
}
}
