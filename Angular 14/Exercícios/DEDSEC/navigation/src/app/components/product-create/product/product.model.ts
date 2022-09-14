/* INTRODUÇÃO - Backend (Criar um produto na janela "product-create".) */


/* Para que sejam registrados os produtos criados ao clicarmos no botão "Criar Produto", é necessário criarmos um modelo de produto e um database (banco de dados); 
    para criar o modelo, apliquei o mesmo ao COMPONENTE do produto, esse modelo será o padrão de todo produto que for gerado e enviado para o database (db.json), no backend. 
                                                                             
    
                                                                                |
                                                                                |
                                                                                |
                                                                                |
                                                                                |
                                                                                V                                                                             */

                                                                        


    export interface Product { /* [[[[1]]]]. É gerado o modelo do produto, nota-se que no "id" é introduzida uma interrogação ("?"), o que indica que o id é um dado  OPCIONAL, ou seja,
                                               no db.json serão necessários apenas os dados de "name" e de "price". */

    id?: number //O id será tipado como número, como é o costume de números de identificação.
    name?: string //O nome, obviamente, será uma String - como estamos tratando de um dado que não tem o objetivo de identificar por número.
    price?: number //O preço também irá se tratar de números. 


}

                                                            //Continuação em app.module.ts