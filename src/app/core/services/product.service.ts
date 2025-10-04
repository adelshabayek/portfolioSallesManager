// src/app/core/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product { id:string; title:string; price:number; currency:string; description:string; image:string; tags:string[]; }

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/products.json');
  }
}
