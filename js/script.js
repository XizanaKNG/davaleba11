const products1 = [
  {
    title: "Gray T-Shirt",
    price: "$14.99",
    img: "./assets/GrayTShirt.png"
  },
  {
    title: "Black Jeans",
    price: "$34.99",
    img: "./assets/BlackJeans.png"
  },
  {
    title: "Green Jacket",
    price: "$59.95",
    img: "./assets/GreenJacket.png"
  },
  {
    title: "White Sneakers",
    price: "$49.95",
    img: "./assets/WhiteSneakers.png"
  }
];

const products2 = [
  {
    title: "Blue Sweatshirt",
    price: "$29.95 - $179.95",
    img: "./assets/BlueSweatshirt.png",
    colors: ["blue", "black"]
  },
  {
    title: "Red Hoodie",
    price: "$24.95 - $149.95",
    img: "./assets/RedHoodie.png",
    colors: ["red", "green"]
  },
  {
    title: "Yellow Pullover",
    price: "$19.95 - $129.95",
    img: "./assets/YellowPullover.png",
    colors: ["yellow", "orange"]
  },
  {
    title: "Purple Jacket",
    price: "$39.95 - $199.95",
    img: "./assets/PurpleJacket.png",
    colors: ["purple", "pink"]
  }
];

function generateCards(products) {
  const container = document.getElementById('product-container');
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.title;
    
    const title = document.createElement('h2');
    title.textContent = product.title;
    
    const price = document.createElement('p');
    price.textContent = product.price;
    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    
    if (product.colors) {
      const colorOptions = document.createElement('div');
      product.colors.forEach(color => {
        const colorDot = document.createElement('span');
        colorDot.style.backgroundColor = color;
        colorDot.style.width = '10px';
        colorDot.style.borderRadius = '50px';
        colorDot.style.height = '10px';
        colorDot.style.display = 'inline-block';
        colorDot.style.marginRight = '5px';
        colorOptions.appendChild(colorDot);
      });
      card.appendChild(colorOptions);
    }
    
    container.appendChild(card);
  });
}

generateCards(products1);
generateCards(products2);
