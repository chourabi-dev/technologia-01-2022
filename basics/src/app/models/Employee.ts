export class Employee{
    fullname:string;
    email:string;
    address:string;
    year:number;
    

    constructor(fullname:string,email:string,address:string, year:number){
        this.fullname = fullname;
        this.email = email;
        this.address = address;
        this.year = year;
        
    }
}