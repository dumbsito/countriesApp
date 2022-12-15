import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTCountry } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

private apiUrl:string=`https://restcountries.com/v3.1` 
  constructor( private http:HttpClient) { }

  buscarPais(query:string):Observable<RESTCountry[]>{
    const url=this.apiUrl + "/name/" + query

   return this.http.get<RESTCountry[]>(url)
  }

  buscarCapital(query:string):Observable<RESTCountry[]>{

    const url=this.apiUrl + "/capital/" + query

    return this.http.get<RESTCountry[]>(url)
  }

  buscarPorId(query:string):Observable<RESTCountry>{

    const url=this.apiUrl + "/alpha/" + query

    return this.http.get<RESTCountry>(url)
  } 

  buscarRegion(region:string):Observable<RESTCountry[]>{

   const params=new HttpParams()
   .set("fields","name,capital,cca2,flags,population")

    const url=this.apiUrl + "/region/" + region;
  

    return this.http.get<RESTCountry[]>(url, {params:params})
  }
}
