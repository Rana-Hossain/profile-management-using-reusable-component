import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarSidebarComponent } from './topbar-sidebar/topbar-sidebar.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleProfileComponent } from './single-profile/single-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { GenerateCdComponent } from './generate-cd/generate-cd.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarSidebarComponent,
    ProfileListComponent,
    CreateProfileComponent,
    SingleProfileComponent,
    UpdateProfileComponent,
    AccountFormComponent,
    GenerateCdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
