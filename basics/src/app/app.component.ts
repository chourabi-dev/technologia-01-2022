import { Component } from '@angular/core';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular spring app';
  username:string="chourabi taher";
  email;
  year:number = 2022;

  /*
  employees:string[] = [
    'chourabi taher',
    'test user',
    'test test test'
  ];*/


  /**
   * 
   * users:any[]=[
    { fullname:"chourabi taher", phone:"12121212" },
    { fullname:"chourabi taher", phone:"12121212" },
    { fullname:"chourabi taher", phone:"12121212" },
    { fullname:"chourabi taher", phone:"12121212" },
    { fullname:"chourabi taher", phone:"12121212" },
    { fullname:"chourabi taher", phone:"12121212" },
    { fullname:"chourabi taher", phone:"12121212" },
    { fullname:"chourabi taher", phone:"12121212" },
    
  ]
   */

  employees:Employee[]=[
    new Employee('chourabi taher','tchourabi@gmail.com','1900 somewhere',1950),
    new Employee('chourabi taher 2','tchourabi@gmail.com','1900 somewhere',2010),
    new Employee('chourabi taher 3','tchourabi@gmail.com','1900 somewhere',2003),
    
  ]

  



  




}
