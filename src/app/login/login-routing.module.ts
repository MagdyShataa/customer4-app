import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "forget-password", component: ForgetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
