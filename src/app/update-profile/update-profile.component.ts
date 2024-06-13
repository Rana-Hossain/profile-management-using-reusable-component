import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../service/profile-service.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../model/profile';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  profileData: any;
  updateProfile: any;


  constructor(private profileService:ProfileServiceService,private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.profileData = this.profileService.getProfileById(id);
    
    console.log(id);
    console.log(this.profileData);
  }

  onUpdate(updatedProfile: SubmitEvent) {
    
  }
}
