import { Product } from './../product-create/product/product.model'; // [[[[4]]]]. É importado o Product do modelo criado anteriormente ("product.model.ts"), para que seja usado no script.
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/posts' // ---> Esse Url será o parâmetro para o retorno das observables, para a requisição HTTP. Nele será possível ver os dados enviados ao database. 

  constructor(private snackBar: MatSnackBar, private http: HttpClient, ) { } 

  showMessage(msg: string): void {
   this.snackBar.open(msg, '', {

        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"

   })
 

  }

  create(product: Product): Observable<Product>{ /*  <---- [[[[5]]]]. É gerada a função de criar um produto, "product" é um parâmetro do tipo Produto (do import Product, importado do modelo); 
                                                                Esta função receberá um observable do Produto; */
                                                                                                                                                         
      return this.http.post<Product>(this.baseUrl, product) /* [[[[6]]]]. Será retornado o observable para a requisição HTTP.  */

  }

  read(): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseUrl)

  }

  readById(id: string): Observable<Product> {

    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)


  }
  
  update(product: Product): Observable<Product> {
    
    const url = `${this.baseUrl}/${product.id}`
    return this.http.get<Product>(url)

  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }

}


                                                                     //Continuação em product.components.ts