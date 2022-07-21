

let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]


//Add ID 
for (let i = 0; i < products.length; i += 1) {
    products[i].id = i + 1
}

//Imprimindo Nome

products.forEach(element => {
    console.log('Nome: ' + element.name)
    
});
console.log('----------------------------------')
//Imprimindo ID 3

const Id3 = products.find(element => element.id == 3);
console.log('Objeto do ID 3 é:');
console.log(Id3);
console.log('----------------------------------')

//Imprimir Cor Black
const corBlack = products.filter(element => element.colors.includes('black'))
console.log('Objetos com Cores Black: ')
console.log(corBlack)
console.log('----------------------------------')

//Imprimir os Produtos que nao tem cor
const semCor = products.filter(element => element.colors.length == 0)
console.log('Objetos Sem cores: ')
console.log(semCor)
console.log('----------------------------------')
