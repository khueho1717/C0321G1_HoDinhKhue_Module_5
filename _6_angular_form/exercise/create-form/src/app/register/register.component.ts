import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required,Validators.min(18)]),
    gender: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^\+84 \d{9,10}$/)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  checkPasswords: ValidatorFn = (contactForm: AbstractControl):  ValidationErrors | null => {
    let pass = contactForm.get('password').value;
    let confirmPass = contactForm.get('confirmPassword').value

    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
