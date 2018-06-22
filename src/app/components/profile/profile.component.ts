import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  repos:any[];
  username:string;

  constructor(private _githubservice:GithubService) {
   this.user= false; 
  }

  searchUser(){
    this._githubservice.updateUser(this.username);

    this._githubservice.getUser().subscribe(user => {
     console.log(user);
     this.user=user;
    });


    this._githubservice.getRepos().subscribe(repos =>{
      this.repos=repos;
      console.log(this.repos);
    });  

  }

  ngOnInit() {
  }

}
