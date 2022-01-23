import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl('/home');
   } else {
     alert("Error")
   }
 }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
}
}
