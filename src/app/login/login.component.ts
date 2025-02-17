import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  name: any;
  onSubmit() {
    console.warn(this.loginForm.value);
  }

  loginForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: [""],
  });
  updateProfile() {
    this.loginForm.patchValue({
      email: "",
      password: "",
    });
  }

  message: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.message = this.getMessage();
  }

  getMessage() {
    return "Logged " + (this.authService.isLoggedIn ? "in" : "out");
  }

  login() {
    this.message = "Trying to log in ...";

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = "/admin";

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
