import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { LoginModule } from "./login/login.module";
import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    AdminModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
