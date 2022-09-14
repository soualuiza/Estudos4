import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

 
 onMudouValor() {
  console.log()
 }
 
  url: string = 'youtube.com.br'  
  getValor() {

    return 10
  }
  
urlIMG = 'https://loremflickr.com/640/360'
  cursoAngular: boolean = true

  getCurtirCurso() {

    return true
  }


  ngOnInit(): void {
  }



}
