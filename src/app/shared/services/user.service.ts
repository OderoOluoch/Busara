import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BASE_URL = 'http://fullstack-role.busara.io/';
  readonly CLIENT_ID = 'zVs3J7FZupB3TLPskQOy1xHLwYTRkzUSf2rdTDCu';
  readonly CLIENT_SECRET = 'Zv19oWmm416sTyjWT5Sx2r1gRwjWrXU3P5dWledQpYjxEvavS58SPtz03M8wvsgajaVLhcimmJIUUYUDad06V6HQosmPoj3TPRNjg7bgniQlooIwyFWfz8KfkM5Tdh7R';

  constructor(private http:HttpClient) { }


  userAuthentication(username:string,password:string){
    const body = new HttpParams()
        .set('username', username)
        .set('password', password)
        .set('grant_type', 'password')
        .set('client_id', this.CLIENT_ID)
        .set('client_secret', this.CLIENT_SECRET);     
      var requestHeader = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded'});
  
      return this.http.post(this.BASE_URL +'/api/v1/oauth/token/',body,{headers:requestHeader})
  
    }
}
