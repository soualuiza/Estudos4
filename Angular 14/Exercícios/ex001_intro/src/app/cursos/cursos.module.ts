import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component'; /*NOTA: O IMPORT FOI  FEITO AUTOMATICAMENTE ATRAVÉS DO AUTOIMPORT,
                                                      NA AUSÊNCIA DO MESMO, IMPORTAR O COMPONENTE "CURSOS" MANUALMENTE.*/



@NgModule({
  declarations: [
    CursosComponent /* [1]. É declarado dentro da classe o componente "Cursos"; */
  ],
  imports: [
    CommonModule
  ],
  
  exports: [
      CursosComponent /* [2]. É atribuído um exportador
                           para o componente "Cursos",
                           para que possa ser exportado para outro módulo. */
  
                          ]
                                /* ETAPA 3 NO MÓDULO APP */
})
export class CursosModule { }
