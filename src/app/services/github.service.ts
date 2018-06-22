import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username:string;
  private client_id = '0824a96a1e4176c713ee';
  private client_secret = '1fc2d14cceb95c81c4f050d9022eab6b61f91987';

  constructor(private _http:Http) {
    console.log('GithubService is ready...');
    this.username='false';
   }

   getUser(){
     return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
     .pipe(map(res => res.json()));
    }

    getRepos(){
      return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .pipe(map(res => res.json()));
    }

    updateUser(username:string){
      this.username=username;
    }
     
   }
