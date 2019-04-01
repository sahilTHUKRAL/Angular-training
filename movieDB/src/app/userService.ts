import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from './user';
 
@Injectable({
  providedIn: 'root'
})
export class userService {
 
  base_url = 'http://localhost:3000/users'
  constructor(private http: HttpClient) {
 
   }
 
  getUsers(){
    return this.http.get(this.base_url)
  }
  getUserByIdAndPassword(email:String,password:String)
  {
    this.http.get(this.base_url).subscribe(data=>{
        if(data===null || data===undefined){alert('NO USER WITH GIVEN ID EXISTS');}
        console.log(data);
        // const user= data.password;
    },
    error => {
        alert('NO USER WITH GIVEN ID EXISTS')
        console.log("Error")
      });
    return this.http.get(this.base_url);
  }
  
  saveUser(USER:user){
    let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        //   ,
        //   'accept': 'application/v1+json',
        //   'feSessionId': fesessionId,
        //   'merchantId': 'Admin',
        //   'channel': 'WEB',
        //   'endChannel': 'ALL',
        //   'customerId': 'Admin'
        })
      };
    
    this.http.post(this.base_url,user,httpOptions),
    error => {
        alert('')
        console.log("Error")
      };
  }
}
 