

import { Product } from './product.model';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product =  {

    name: '',                // [[[[7]]]]. É exportado o modelo de produto dentro do script, nota-se que os valores estão definidos; caso não queira deixar um valor definido,    
    price: 0       //           basta usar "null" como o valor atribuído à variável.

  
  }


  constructor(private ProductService: ProductService, private router: Router, private snackBar: MatSnackBar,  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {

    this.ProductService.create(this.product).subscribe(() => { // [[[[8]]]]. O produto é criado no database e é retornado seu Observable, de acordo com o modelo acima, da variável "product";
      
    this.ProductService.showMessage('Produto criado')     // ---> Ao ser criado o produto, uma notificação snackbar é mostrada no canto superior direito de que o produto foi criado; 
      this.router.navigate(['/home'])                     // ---> Em seguida, logo após a notificação ser mostrada, o usuário é navegado para a rota de /home. 

                                                                                      //Continuação em product.component.html.
    })


  }

 reverse() {

      this.router.navigate(['home'])
      this.ProductService

 }
}


