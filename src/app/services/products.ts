import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn : 'root',
})


export class Products {
    apiUrl = "https://dummyjson.com/products"
    constructor(private http:HttpClient){

    }
    getProducts(){
        return this.http.get<any>(this.apiUrl) // in place of any we can use any interface type defined
    }
}
