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

console.log('EX1')
//Add new Product it array with same property
products.push({ name: 'Macbook MELI', price: 40000, quantity: 1, colors: ['black', 'white'] });
console.log('-------------------------')


console.log('EX2')
//Remove out of stock products
const productsArray = products.filter(element => element.quantity > 0);
console.log(productsArray);
console.log('-------------------------')


console.log('EX3')
//EX 3
const totalyStock = products.reduce(function (totaly, product) {
    return totaly + product.quantity;
}, 0);
console.log(totalyStock);
console.log('-------------------------')


console.log('EX4')
//ex4
const productValue = products.filter(element => element.price > 499);
console.log(productValue)
console.log('-------------------------')

console.log('EX5')
//ex5
const productO = products.filter(element => element.name.indexOf('o', 0) > 0);
console.log(productO)