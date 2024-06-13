import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { SingleProfileComponent } from './single-profile/single-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { GenerateCdComponent } from './generate-cd/generate-cd.component';

const routes: Routes = [
  {path:'', component: ProfileListComponent},
  {path:'Profile_list', component: ProfileListComponent},
  {path:'Create_Profile', component: CreateProfileComponent},
  {path:'view-Single-profile/:id', component: SingleProfileComponent},
  {path:'update-profile/:id', component: UpdateProfileComponent},
  {path:'genrate-cv/:id', component: GenerateCdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
