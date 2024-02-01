import { Injectable, inject, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, Products } from './products';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);

  private products$(): Observable<Product[]> {
  return this.http.get<any>('http://localhost:1337/api/products?populate=*')
    .pipe(map(res => res.data.map( (p: any) => ({
      id: p.id,
      name: p.attributes?.title,
      content: p.attributes?.content,
      medias: p.attributes?.medias?.data?.map((media: any) => ({
        id: media.id,
        name: media.attributes?.name,
        url: 'http://localhost:1337' + media.attributes?.url
      }))
    } as Product))));
  }

  products = toSignal(this.products$(), {initialValue: [] as Products});
}
