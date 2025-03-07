import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environment/environment.development";

@Injectable({
    providedIn: 'root'
  })

export class DataService {

    private readonly apiUrl = environment.apiUrl;
  
    constructor(private http: HttpClient) {}
  
    getCategory(): Observable<any> {
      return this.http.get(`${this.apiUrl}/api/category`);
    }
  
    createCategory(categoryData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/api/category`, categoryData);
    }

    updateCategory(categoryId: number, categoryData: any): Observable<any> {
      return this.http.patch(`${this.apiUrl}/api/category/${categoryId}`, categoryData);
    }

    getProducts(): Observable<any>{
      return this.http.get(`${this.apiUrl}/api/product`);
    }
    createProduct(productData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/api/product`, productData);
    }
    updateProduct(productId: string, productData: any): Observable<any> {
      return this.http.patch(`${this.apiUrl}/api/product/${productId}`, productData);
    }
  

  }