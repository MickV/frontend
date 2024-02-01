import { Component, Input, computed, inject, input, signal } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  id = input<number>();

  productDetailService = inject(ProductsService);
  product = computed(() => this.productDetailService.products().find(p => p.id === Number(this.id())));
  
}
