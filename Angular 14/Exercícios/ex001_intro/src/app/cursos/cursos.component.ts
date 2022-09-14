import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service'; /*[[5]]. É importada a classe de "CursosService" */



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  
  cursos: string [] = [] /*É atribuída a variável "cursos", em formato string - os valores dessa variável são colocados dentro de um Array, 
                                                                  que dentro do HTML, será convertido em list items <li>, através da diretiva "*ngfor", que será atribuído dentro da tag <li>. */


  constructor(public cursosService: CursosService) /*[[6]]. É injetada a dependência em CursosService, para o serviço, dentro do construtor.*/{     
    this.nomePortal = 'https://www.youtube.com'

    //var servico = new CursosService(); /* [[6b (OPCIONAL)]]. É declarada a variável de serviço, onde, claramente, é atribuído "CursosService" - ou seja, o Serviço. */
    
    this.cursos = this.cursosService.getCursos(); /* [[7]]. É finalizada a injeção do serviço, tornando-o funcional, enfim.  */
    
}

  ngOnInit(): void {
  }

}
