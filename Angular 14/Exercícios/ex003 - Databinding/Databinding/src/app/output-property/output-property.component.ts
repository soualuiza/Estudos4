import { Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

 @Input() valor: number = 0;

  incrementa() {

    this.valor++
    this.mudouValor.emit({novoValor: this.valor})


  }

  decrementa() {

    this.valor--
    this.mudouValor.emit({novoValor: this.valor})

  }

  mudouValor = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
