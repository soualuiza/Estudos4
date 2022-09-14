import { ProductService } from './../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ProductService: ProductService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  logar(): void {

    this.ProductService.showMessage('ERRO 12 - Usuário não existe')

  }

}
