productList = [
  {
    name: "Celular Samsung",
    price: 23600,
  },
  {
    name: "Humificador",
    price: 5000,
  },
  {
    name: "Ipat Aple",
    price: 33000,
  },
  {
    name: "Cargador Inalambrico",
    price: 6200,
  },
];

function main() {
  const templade = document.getElementById("product-card");

  productList.forEach((products) => {
    const clone = templade.content.cloneNode(true);

    const name = clone.querySelector("h2");
    name.innerText = products.name;
    const price = clone.querySelector("p.price");
    price.innerText = products.price;

    const container = document.querySelector("div.container-2");
    container.appendChild(clone);
  });
}
main();
