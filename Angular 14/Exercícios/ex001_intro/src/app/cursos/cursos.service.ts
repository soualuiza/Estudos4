/* [[1]]. É criado um Serviço dentro do módulo, através dele, serão feitas atividades
que facilitam a codificação dentro do Angular. */

import { Injectable } from '@angular/core';

@Injectable({  /* [[2]]. Dentro dos injetáveis, atribuímos o serviço desejado através de javascript, ou typescript. */

  providedIn: 'root'
})
export class CursosService {

  constructor() { }

          getCursos() { /* [[3]]. A Variável "cursos", do Componente "cursos" é chamada para o script. */
              
          return ['JS', 'Ext JS', 'Angular', 'HTML', 'CSS']; /* [[4]]. É extraído o Array da variável "cursos", através do "return", 
                                                                        fazendo com que não seja necessário um script dentro do componente;
                                                                        iniciando sua conversão em Serviço. 
                                                                                                            ETAPA 5 NOS COMPONENTES DE CURSOS */
     }
}
