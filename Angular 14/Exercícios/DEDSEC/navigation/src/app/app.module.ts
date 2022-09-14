
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; //[[[[2]]]]. É trago o import de HttpClientModule para o app.module, para dar início ao HttpClient (requisitor de observables para o backend).
import { MatCardModule } from '@angular/material/card';

// ----------------------------------------------------------------

import { FormsModule } from '@angular/forms';                       // ((1)). Para criarmos um formulário de criação de dados para o backend, primeiro fazemos 3 imports de 3 módulos, são eles:
import { MatFormFieldModule } from '@angular/material/form-field';  //  FormsModule, MatFormFieldModule e MatInputModule.
import { MatInputModule } from  '@angular/material/input';

// -----------------------------------------------------------------

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProComponent } from './pro/pro.component';
import { RedDirective } from './directives/red.directive';
import { ProductComponent } from './components/product-create/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './footer/footer.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    ProComponent,
    RedDirective,
    ProductComponent,
    FooterComponent,
    ProductReadComponent,
    ProductCreateComponent,
    ProductUpdateComponent,

   
    
    
   
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,            // [[[[3]]]]. É de fato importado o módulo HttpClient, para que agora seja possível introduzi-lo nos componentes, e, consequentemente também nos serviços.
    MatCardModule,                             
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,       
    //------------------------
    
    FormsModule,              // ((2)). Após os três módulos serem importados, suas importações são declaradas nos imports.   
    MatFormFieldModule,
    MatInputModule
                // >>Continuação em product.component.html<< 

    //------------------------

    
    
    

                                                // Continuação em product.service.ts
 
   
    
   
    
    
   
    
    
    
  ],
  providers: [   
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
