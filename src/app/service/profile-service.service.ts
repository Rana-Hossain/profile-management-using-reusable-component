import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { Profile_data } from '../model/profile-data';
import { Observable, of } from 'rxjs';
import { DEMO_PRODUCTS } from '../model/demo-profile-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private router:Router) { }

  addProfile(profile: Profile) {
    DEMO_PRODUCTS.push(profile);
  }

  getProfileById(id:number): Profile{
    return DEMO_PRODUCTS[id];
  }
  updateProfile(id: number, updatedProfile: Profile) {
    if (id !== -1) {
      DEMO_PRODUCTS[id] = { ...updatedProfile, id: id }; // Update profile with new data
    }
  }
  viewProfileByID(id:number){
    this.router.navigate(["view-Single-profile",id]);
  }
}
