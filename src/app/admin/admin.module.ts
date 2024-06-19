import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
