const MUSTHAVE_URL = 'http://localhost:3000/mustHave';

let mustHaveList = [];

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getMustHave() {
  mustHaveList = await fetchData(MUSTHAVE_URL) || [];
  mustHave(mustHaveList);
}

function mustHave(products) {
  const content = document.getElementById('musthave-content');
  content.innerHTML = '';
  products.forEach(product => {
    const productCard = `
      <div class="musthave-card">
        <img src="${product.image}" alt="must have" />
        <h4>${product.name}</h4>
        <p><span><del>₹${product.price.original.toFixed(2)}</del> ₹${product.price.discounted.toFixed(2)}</span> <span><i class="ri-heart-line"></i><i class="ri-shopping-cart-line"></i></span></p>
      </div>
    `;
    content.insertAdjacentHTML('beforeend', productCard);
  });
}

document.addEventListener('DOMContentLoaded', getMustHave);
