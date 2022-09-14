import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product-create/product/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product; 

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { 

    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product => {
      this.product = product

    })
  }
 
 
  updateProduct(): void  {

  this.productService.update(this.product).subscribe(() => {
    this.productService.showMessage('Produto Alterado')
    this.router.navigate(['/product-create'])
  })

  }

  goBack() {

    this.router.navigate(['/product-create'])
  }

}
