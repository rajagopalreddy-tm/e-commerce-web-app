const PRODUCTS_URL = 'http://localhost:3000/products';

let productsList = [];

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getProducts() {
  productsList = await fetchData(MUSTHAVE_URL) || [];
  products(productsList);
}

function products(products) {
  const content = document.getElementById('musthave-content');
  content.innerHTML = '';
  products.forEach(product => {
    const productCard = `
      <div class="products-card">
        <img src="${product.image}" alt="must have" />
        <h4>${product.name}</h4>
        <p><span><del>₹${product.price.original.toFixed(2)}</del> ₹${product.price.discounted.toFixed(2)}</span> <span><i class="ri-heart-line"></i><i class="ri-shopping-cart-line"></i></span></p>
      </div>
    `;
    content.insertAdjacentHTML('beforeend', productCard);
  });
}