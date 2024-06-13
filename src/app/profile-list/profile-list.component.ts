import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { DEMO_PRODUCTS } from '../model/demo-profile-data';
import { Profile_data } from '../model/profile-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {


  profile: Profile[]=[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.profile = DEMO_PRODUCTS;
  }

  veiwProfile(id: number) {
    console.log(id);
    this.router.navigate(["view-Single-profile",id]);
    //return id;
  }
  updateProfile(id: number) {
    console.log(id);
    this.router.navigate(["update-profile",id]);
  }

  generateCV(id: number) {
    this.router.navigate(["genrate-cv",id]);
  }

}

