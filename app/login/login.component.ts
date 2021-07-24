import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardServiceService } from '../dashboard-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    emailFormControl : new FormControl('', [
    Validators.required,
    Validators.email,
  ]),
    password : new FormControl('', [
    Validators.required,
  ])
})

  

  constructor( private dashboardService : DashboardServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }

  authenticateLogin(){
    // let loginParameters = {
    //   username : this.loginForm.controls['emailFormControl'].value,
    //   password : this.loginForm.controls['password'].value
    // }
    // this.dashboardService.authenticateLogin(loginParameters).subscribe((resp : any)=>{
    //   console.log(resp)
    // })

    this.router.navigateByUrl('/cameraDetails')

  }

  forgotPassword(){
    
  }

}
