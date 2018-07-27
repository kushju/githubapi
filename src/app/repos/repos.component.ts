import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  public repoData=[];
  public showTable = false;
  home(){
    this.router.navigateByUrl('main');
  }
  ngOnInit() {
    let username = localStorage.getItem('name'); 
    let parameters:any = {};
    parameters.method  = 'GET';
    parameters.url = 'users/'+username+'/repos';

    //parameters.token = undefined;
    
    this.apiService.sendRequest(parameters, 'core')
      .subscribe(
        (data:any) => {
          this.showTable = true;
          this.repoData = data;
          //console.log(data);
        },
        (error:any) => {
          alert(error);
        }
      );   
  }

}
