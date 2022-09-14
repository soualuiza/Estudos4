import { CursosModule } from './cursos/cursos.module'; /* [3]. É declarada a possibilidade de importação do MÓDULO "CURSOS". */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Modulo1Module } from './modulo1/modulo1.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcComponent } from './components/firstc/firstc.component';
import { MeuComponent } from './meu-primeiro-componente/meu.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';



@NgModule({ /* Classe onde serão inseridos todos
              os metadados de declarações, imports, providers e bootstrap.*/
  declarations: [
    AppComponent,
    FirstcComponent,
    MeuComponent, /*Componente inserido nas declarações, que automaticamente
    será inserido nos imports, acima. */
    
    MeuPrimeiro2Component, 
  ],
  imports: [
    Modulo1Module,
    BrowserModule,
    AppRoutingModule,
    CursosModule /* [4]. É importado o MÓDULO "CURSOS", dentro dos imports. */
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
