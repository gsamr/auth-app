import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  constructor(private authService:AuthServiceService, private router:Router) { }

  ngOnInit() {
  }

  authorize(){
    this.authService.authorize().subscribe(
      data=>{
        window.location.href = data.message

        
      }
    )
  }

  proceed(){
    console.log(window.location.href)
    let url = window.location.href;
    let result = url.split('=')[1].split('&')
    console.log(result[0])

    this.authService.listFiles(result[0]).subscribe(
      data=>{
        console.log(data)
        localStorage.setItem("file_list",JSON.stringify(data.message))
        this.router.navigate(['upload'])
      }
    )
  }
}
