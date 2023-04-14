import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder:FormBuilder, private toastr:ToastrService, private auth:AuthService){

  }

  registerForm = this.builder.group({
    email:["",[Validators.required, Validators.email]],
    password:["",[Validators.required]]
  })

  sigin(){
    if(this.registerForm.valid){
      this.auth.signIn(this.registerForm.value).subscribe({
        next:(v)=>{
          localStorage.setItem('token',v.token)
          localStorage.setItem('role',v.role)
        },
        error: (e)=>{
          this.toastr.error(e.error)
          console.log(e)
        }
      })
    }else{
      this.toastr.warning("Please check your email and password")
    }
  }
}
