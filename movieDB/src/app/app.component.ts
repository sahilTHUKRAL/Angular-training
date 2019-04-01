import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { userService } from './userService';
import { user } from './user';
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private service:userService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          Id: ['',Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }        
    }
    get f() { return this.registerForm.controls; }
    hitAPI(){
    user USER= new user(
                        this.registerForm.get("email"),
                        this.registerForm.get("Id"),
                        this.registerForm.get("firstName"),
                        this.registerForm.get("lastName"),
                        this.registerForm.get("password"))
    this.service.saveUser()
    //this.service.getUserByIdAndPassword("1","1234567");
    }

}
