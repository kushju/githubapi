import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }
  public showTable = false;
  public username;
  public name;
  public repo;
  search(){
    console.log(this.username);
    localStorage.setItem('name',this.username);
    let parameters:any = {};
    parameters.method  = 'GET';
    parameters.url = 'users/'+this.username;

    //parameters.token = undefined;
    
    this.apiService.sendRequest(parameters, 'core')
      .subscribe(
        (data:any) => {
          console.log(data.name);
          this.showTable = true;
          this.name=data.name;
          this.repo =data.public_repos;
        },
        (error:any) => {
          alert(error);
        }
      );   
  }
  repos(){
        this.router.navigateByUrl('repos');
  }
  
  ngOnInit() {
  }

}
