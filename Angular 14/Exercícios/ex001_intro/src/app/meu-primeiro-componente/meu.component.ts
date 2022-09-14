import { Component } from "@angular/core"; 

@Component ({ /* Aqui dentro será declarado um componente, 
                    composto por um seletor
                    e um template.*/

    selector: 'meu-primeiro-component', /* No seletor, declaramos
                                         o nome deste componente
                                          "meu-primeiro-component".*/


/* Dentro do template
   é inserido o conteúdo do componente */  
   
   template: `
                <p>Testando</p>
    ` 
})

export class MeuComponent {} /* A classe "MeuComponent" será inserida
                             na importação, dentro do módulo,
                             para que assim a página seja carregada. */