import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class LoginModule {}
