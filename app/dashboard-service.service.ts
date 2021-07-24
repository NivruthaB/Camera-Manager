import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http : HttpClient) { }

  authenticateLogin(loginParameters : any){
    const api_key = 'dev_test:3H1Bf6mCctIgpCuzvrnyekf3VhAUEnKJ'
    const baseUrl = 'http://rest.cameramanager.com/oauth/token?grant_type=password&scope=write'
    let header = new HttpHeaders()
    header.append('Authorization', 'Basic' + btoa(api_key))
    header.append('Accept', 'application/json');
    // header.append('Access-Control-Allow-Origin', '*');
    // header.append('Access-Control-Allow-Credentials', 'true');
    // header.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    const headers = {
      headers : header
    }
    console.log(headers)
    // headers.append('Authorization','Basic' + btoa(api_key))
    return this.http.post<any>(baseUrl + '&username=' + loginParameters.username
     + '&password='+ loginParameters.password,null,headers)
  }
}
