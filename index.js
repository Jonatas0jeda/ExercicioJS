

let custoEnvio = 0
let precoFinal = 0
function calcularPreco(nome,preco) {

    if (preco <= 2000) {
        custoEnvio = 300
    }
    if (preco > 2000 && preco <= 4000) {
        custoEnvio = 450
        
    }
    if (preco > 4000) {
        custoEnvio = 700
      
    }
  precoFinal = preco + custoEnvio;
 console.log(`O Produto ${nome} custa ${preco} Seu custo de envio é de ${custoEnvio} Portanto, o preço final é ${precoFinal}`)
};


calcularPreco('MacBook', 2500)
calcularPreco('Celular', 500)
calcularPreco('Playstation do Yudi', 4500)
