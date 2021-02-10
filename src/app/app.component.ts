import { Component } from '@angular/core';
import {AccessList} from '../app/models/access-list.model';
import {Country} from './models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms-practise';
  subscribe:boolean=false
  subscribe2:boolean=false
  cpwd:String=""
  pwd:String=""
  signupProcess(form: any){
    if(this.cpwd != this.pwd){
      alert("Please check the passwords and resubmit the form");
    }
    console.log(form.value)
  }
  accessDetails : AccessList[] = [
    new AccessList(1, 'Admin'),
    new AccessList(2, 'Database'),
    new AccessList(3, 'Network')
    ];

    countries:Country[]=[
      new Country(1, "India"),
      new Country(2, "Japan"),
      new Country(3, "USA")
    ]
  
}
