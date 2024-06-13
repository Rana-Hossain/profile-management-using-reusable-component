import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileServiceService } from '../service/profile-service.service';
import { Profile } from '../model/profile';

@Component({
  selector: 'app-generate-cd',
  templateUrl: './generate-cd.component.html',
  styleUrls: ['./generate-cd.component.css']
})
export class GenerateCdComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute,private profileService:ProfileServiceService) { }

  profile : Profile | any;
  skillArray: string[] = [];

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.profile = this.profileService.getProfileById(id);
    if (this.profile && this.profile.skill) {
      this.skillArray = this.profile.skill.split(',');
    }
    console.log(this.profile);
  }

}
