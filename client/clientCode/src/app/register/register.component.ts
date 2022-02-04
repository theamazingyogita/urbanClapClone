import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    gender : new FormControl(''),
    username: new FormControl(''),
    password : new FormControl(''),
  });

  onSubmit() {
    // this.http.post('http://localhost:3000/user', this.registerForm.value)
    // .subscribe(response => {
    //   console.log(response)
        alert("Registration success");
    // },
    // err => {
    //   alert("user exists already");
    // }
    // )
    console.warn(this.registerForm.value);
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
