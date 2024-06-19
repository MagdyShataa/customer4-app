import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import {authGuard} from '../auth/auth.guard';
const routes: Routes = [
  { path: "", component: AdminComponent },

  { path: "about", component: AboutComponent },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },

  { path: "services", component: ServicesComponent },
  { path: "about", component: AboutComponent },


  {
    path: "admin-dashboard",
    component: AdminDashboardComponent,
    canActivate: [authGuard],
  },
  { path: "", redirectTo: "/login", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
