// questão 1.1
let categorias = ['Eletrônicos', 'Vestuario', 'Alimentos']
console.log(categorias)

// questão 1.2
let produtos = [ 101, 102, 103, 104, 105]
console.log(produtos)

let nomes = new Array('Smartphone', 'Camiseta', 'Arroz', 'Notebook', 'Chocolate')
console.log(nomes)



// questão 1.3
console.log(categorias[0])

categorias[1]= 'Roupas'
console.log(categorias[1])
// questão 2.1
categorias.push('Livros')
console.log(categorias)
categorias.pop()
console.log(categorias)


// questão 2.2
categorias.unshift('Brinquedos')
console.log(categorias)
categorias.shift()
console.log(categorias)

// questão 2.3
console.log(categorias.length)


// questão 3.1
for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i])
}


// questão 3.2
for (let categoria of categorias) {
    console.log(categoria)
}

// questão 4.1
const perifericos = [
{ nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
{ nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
{ nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];
console.log(perifericos[0].nome)
// questão 4.2
let produtosbaratos = perifericos.filter((periferico) => periferico.preco < 300);
for (let periferico of produtosbaratos) {
    if (periferico.preco % 100 === 0) {
        console.log(periferico.nome)
    }
}
console.log(produtosbaratos)

// questão 4.3
const numeros = [2, 3, 5, 10] 
const soma=  numeros.reduce((acumulador,numero) => acumulador + numero, 0)
console.log(soma)
// questão 4.4
const valores = [100, 200,300]
const desconto = valores.map((valor) => valor *0.9)
const nomesprodutos = perifericos.map((periferico) => periferico.nome)
console.log(desconto)
console.log(nomesprodutos)
// questão 4.5
const prod= perifericos.slice().sort((a,b) => a.preco - b.preco)
console.log(prod)

// questão 4.6
const verificar= perifericos.some((periferico) => periferico.estoque < 5)
console.log(verificar)




