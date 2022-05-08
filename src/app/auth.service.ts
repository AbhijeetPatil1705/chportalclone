import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router:Router) { }
// }
// setToken(token:string){
//   localStorage.setItem('token',token);
// }
// getToken():string / null{
//   return localStorage.getItem('token');
// }
// isLoggedIn(){
//   return this.getToken() = null;
// }
// logOut() {
//   localStorage.removeItem('token');
//   this.router.navigate(['login']);
// }
// LoginComponent({user, password}:any):Observable<any>{
//   if (user='Admin123' && password='Admin123') {
//     this.setToken('abcdefghigklmn');
//     return of({user='Admin123' && password='Admin123'});
//   }
//   return throwError(new Error('Failed to Login'));
// }
  
// }
}


