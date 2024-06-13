import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { ActivatedRoute } from '@angular/router';
import { ProfileServiceService } from '../service/profile-service.service';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.css']
})
export class SingleProfileComponent implements OnInit {
  

  constructor(private activeRouter: ActivatedRoute,private profileService:ProfileServiceService) { }

  Profile_data: any;

  profile : Profile | any;

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.profile = this.profileService.getProfileById(id);
    console.log(id);
    console.log(this.profile);
  }
}
