import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.productService.readById(id).subscribe((product) => {
      this.product = product
    })
  }

  deleteProduct(){
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage('Successfully deleted.')
      this.router.navigate(['/products'])
    })
  }

  cancelProduct(): void{
    this.router.navigate(['/products'])
  }

}
