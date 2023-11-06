const livros = require('./listaLivros')

let maisBarato = 0
let maisCaro = 0

 for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
 }

 console.log(`O livro mais barato é: ${livros[maisBarato].titulo}, que custa R$${livros[maisBarato].preco}`);