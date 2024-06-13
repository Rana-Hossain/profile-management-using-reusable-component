import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileServiceService } from '../service/profile-service.service';
import { Profile } from '../model/profile';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  @Input() title: string = 'Create Account';
  form: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileServiceService) { 
    this.form = this.fb.group({
      name: [''],
      email: [''],
      designation: [''],
      phone: [''],
      about: [''],
      skill:[''],
      degree1:[''],
      degree2:[''],
      institution1:[''],
      institution2:[''],
      year1:[''],
      year2:[''],
      jobTitle1:[''],
      jobTitle2:[''],
      company1:[''],
      company2:[''],
      years1:[''],
      years2:[''],
      refName1:[''],
      refName2:[''],
      refContact1:[''],
      refContact2:[''],
      refemail1:[''],
      refemail2:['']
    });
  }

  ngOnInit(): void {
  }

  onCreate(formData: any) {
    if (formData) {
      const newProfile: Profile = {
        name: formData.name,
        email: formData.email,
        designation: formData.designation,
        phone: formData.phone,
        about: formData.about,
        skill: formData.skill,
        degree1: formData.degree1,
        degree2: formData.degree2,
        institution1: formData.institution1,
        institution2: formData.institution2,
        year1: formData.year1,
        year2: formData.year2,
        jobTitle1: formData.jobTitle1,
        jobTitle2: formData.jobTitle2,
        company1: formData.company1,
        company2: formData.company2,
        years1: formData.years1,
        years2: formData.years2,
        refName1: formData.refName1,
        refName2: formData.refName2,
        refContact1: formData.refContact1,
        refContact2: formData.refContact2,
        refEmail1: formData.refEmail1,
        refEmail2: formData.refEmail2
      };

      console.log(newProfile);
      this.profileService.addProfile(newProfile);
      this.form.reset(); // Optionally reset the form after submission
    }
  }
}
