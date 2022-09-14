import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingevent',
  templateUrl: './bindingevent.component.html',
  styleUrls: ['./bindingevent.component.css']
})
export class BindingeventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clicada() { // [2]. É declarada a função de clique;

    alert('Thank u, dumb') // [3]. É gerado e definido um disparo de alerta ao clicar no botão, consequentemente, ao clicar, o alerta "Thank u, dunb" é exibido. 
  
  
  }
  
  nome: any = 'abc'

  

}
