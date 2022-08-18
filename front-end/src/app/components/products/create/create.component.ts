import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = {
    name: 'test',
    price: 1.00,
    qty: 15
  }

  constructor(private productService: ProductsService,
    private router: Router) { }

  ngOnInit(): void { }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Success!')
      this.router.navigate(['/products/crud'])
    })    
  }

  cancelProduct(): void {
    this.router.navigate(['/products/crud'])
  }

}
