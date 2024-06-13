import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from '../model/profile';
import { ProfileServiceService } from '../service/profile-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit  {

  @Input() title: string = 'Create Account';
  @Input() formData: any; // Data for pre-filling form fields
  @Output() createAccount: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateAccount: EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;
  
  profileData: any;
  id!: number

  constructor(private fb: FormBuilder,private profileService:ProfileServiceService,private activeRouter: ActivatedRoute,private router: Router) { 
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
      refEmail1:[''],
      refEmail2:['']
    });
  }

  ngOnInit(): void {
    if (this.formData) {
      this.form.patchValue(this.formData);
    }
    this.id = this.activeRouter.snapshot.params['id'];
    this.profileData = this.profileService.getProfileById(this.id);
  }

  onsubmit() {
    const formData = this.form.value as Profile;
    if (this.formData) {
      // If formData exists, emit updateAccount event
      console.log(formData);
      this.profileService.updateProfile(this.id,formData)
      this.updateAccount.emit(formData);
    } else {
      // If formData is null or undefined, emit createAccount event
      this.createAccount.emit(formData);
    }
    this.profileService.viewProfileByID(this.id);
  }
}
