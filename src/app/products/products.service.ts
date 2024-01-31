import { Injectable, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from './products';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   private products$(): Observable<Products> {
    return of([
      { 
        "id": 1,
        "name": "Product1"
      },
      { 
        "id": 2,
        "name": "Product2"
      },
      { 
        "id": 3,
        "name": "Product3"
      }
    ]);
  }

  products = toSignal(this.products$(), {initialValue: [] as Products});
}
