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
    quantity: 10,
    price: 31.3,
  },
];



window.onload = () => {
  const productsList = document.getElementById("tableBody");
  for (let i = 0; i < products.length; i++) {
    productsList.innerHTML += `
            <tr>
                <td>${products[i].name}</td>
                <td>${products[i].quantity}</td>
                <td>${products[i].price.toFixed(2)}</td>
            </tr>`;
  }
  function getFaturamento(acc, prod) {
    return acc + prod.price * prod.quantity;
  }
  const reduceTable = document.getElementById("reduceTable");
  reduceTable.innerHTML = `<tr> 
        <td>${products.reduce(getFaturamento, 0)}</td>
    </tr>`;
  reduceTable.style.textAlign = "center";

  const filterTable = document.getElementById("filterTable");
  let productsFiltered = products.slice(0);
  
  function lastStock(stock) {
    return stock.quantity <= 15;
  }
  productsFiltered = products.filter(lastStock);
  

  productsFiltered.forEach((product) => {
    filterTable.innerHTML += `<tr> 
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price.toFixed(2)}</td>
    </tr>`;
  });
  filterTable.style.textAlign = "center";
  const sortProducts = document.getElementById("sortTable");
  let productsSorted = products.slice(0);
  productsSorted.sort((a, b) => {
    return b.price - a.price;
  });

  productsSorted.forEach((product) => {
    sortProducts.innerHTML += `<tr> 
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price.toFixed(2)}</td>
    </tr>`;
  });
  sortProducts.style.textAlign = "center";

  newHeader = document.getElementById("newHeader");
  spreadTable = document.getElementById("spreadTable");
  spreadTable.style.textAlign = "center";
  let auxProducts = products.slice(0);
  spreadProducts = auxProducts.forEach((product) => {
    product = {
      ...product,
      discount: product.price * 0.5,
    };

    spreadTable.innerHTML += `<tr> 
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${product.discount.toFixed(2)}</td>
    </tr>`;
  });

  let newPriceTable = document.getElementById("priceAdjustment");
  const discountedProducts = products.map((product) => {
    return {
      ...product,
      price: (product.price * 0.5).toFixed(2),
    };
  });
  discountedProducts.forEach((product) => {
    newPriceTable.innerHTML += `<tr> 
      <td>${product.name}</td>
      <td>${product.quantity}</td>
      <td>${product.price}</td>
  </tr>`;
  });
  newPriceTable.style.textAlign = "center";
};
