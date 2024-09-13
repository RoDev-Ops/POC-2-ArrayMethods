products = [
  {
    name: "Café",
    quantity: 40,
    price: 25.99,
  },
  {
    name: "Energético",
    quantity: 12,
    price: 10.99,
  },
  {
    name: "Shampoo",
    quantity: 15,
    price: 21.5,
  },
  {
    name: "Sorvete",
    quantity:10,
    price: 31.3 
  },
];
// Esqueci como é faturamento de inglês :P
function getFaturamento(acc, prod) {
    return acc + (prod.price * prod.quantity);
  }
  
function lastStock(stock){
    return stock.quantity <= 15
}

window.onload = () => {
  const productsList = document.getElementById("tableBody");
  for (let i = 0; i < products.length; i++) {
    productsList.innerHTML += `
            <tr>
                <td>${products[i].name}</td>
                <td>${products[i].quantity}</td>
                <td>${products[i].price}</td>
            </tr>`;
  }
  const reduceTable = document.getElementById("reduceTable");
  reduceTable.innerHTML = `<tr> 
        <td>${products.reduce(getFaturamento,0)}</td>
    </tr>`;
  reduceTable.style.textAlign ="center";

  const filterTable = document.getElementById("filterTable")
  let productsFiltered = products.filter(lastStock)

  productsFiltered.forEach(product =>{
    filterTable.innerHTML += `<tr> 
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
    </tr>`;
  })


};
