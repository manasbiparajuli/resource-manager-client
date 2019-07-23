import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MustMatch } from '../../shared/validators/must-match.validator';

// Error when invalid control is dirty, touched or submitted
export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    hide: boolean = true;
    submitted: boolean = false;

    matcher = new CustomErrorStateMatcher();

    checkPasswords (group: FormGroup) {
        let pass = group.controls.password.value;
        let confirmPassword = group.controls.confirmPassword.value;

        return pass === confirmPassword ? null : { notSame : true}
    }

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        
        this.registerForm = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, { validator: MustMatch('password', 'confirmPassword') });
    }

    get regForm() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop the user if the form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        console.log("Registration successful!");
    }

    // form controls for user inputs
    nameFormControl = new FormControl('',[
        Validators.required
    ]);

    usernameFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
    ]);

    // passwordFormControl = new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6)
    // ]);

    // confirmPasswordFormControl = new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6)
    // ]);

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email
    ]);
}