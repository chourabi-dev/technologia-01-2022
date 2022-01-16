import { Component } from '@angular/core';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /* title = 'Angular spring app';
  username:string="chourabi taher";
  email;
  year:number = 2022;*/

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
/*
  employees:Employee[]=[
    new Employee('chourabi taher','tchourabi@gmail.com','1900 somewhere',1950),
    new Employee('chourabi taher 2','tchourabi@gmail.com','1900 somewhere',2010),
    new Employee('chourabi taher 3','tchourabi@gmail.com','1900 somewhere',2003),
    
  ]*/

  /******************************************************************************************** */

/*
  gallery:string[]=[
    "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://149619331.v2.pressablecdn.com/wp-content/uploads/2019/12/clouds36.jpg",
    "https://www.wallpaperuse.com/wallp/76-768612_m.jpg"
  ];

  index:number = 0;

  
  
  titleColor="blue";
  showImage:boolean = true;


  toggleImage(){
    this.showImage = ! this.showImage;
  }
  

  previous(){
    this.index--;
    if (this.index < 0) {
      this.index = (this.gallery.length -1 )
    }
  }

  next(){
    this.index++;

    if (this.index == this.gallery.length) {
      this.index = 0;
    }
  }*/


  /****************************************************************** */

 // today = new Date();


 /**
  *  x="0px"

 y="0px";


 isMoving(event:MouseEvent){
   
   const x = event.clientX;
   const y = event.clientY;

   console.log(x,y);

   this.x = x+"px";
   this.y = y+"px";
   
   
 }
  */


 messages:any[]=[
   {
     username:"chourabi",
     message:"hello world !",
     date: new Date()
   }
 ];
 username = "chourabi";

 isTyping:boolean = false;



 userTyping(event){
   this.isTyping = true;

   console.log(event);

   const code = event.code;
   if (code === "Enter") {
     // ready to send message !!
     const val = event.target.value;
     const message = {
       username:this.username,
       message:val,
       date : new Date()
     }

     this.messages.push(message);

      // empty the input for the next message !!
      event.target.value='';
      this.isTyping = false;
      

   }
   

   

   
   
 }






}
