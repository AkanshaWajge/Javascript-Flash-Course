const galleryImages = [
   {
    src: "./assets/gallery/image1.jpg",
    alt: "Thumbnail Image 1"
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thumbnail Image 2"
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thumbnail Image 3"
  }
];

const products = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png",
  },
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 35,
    image: "./assets/products/img1.png",
  },
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 0,
    image: "./assets/products/img2.png",
  },
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png",
  },
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 0,
    image: "./assets/products/img5.png",
  },
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 45,
    image: "./assets/products/img4.png",
  },
];

//Menu
function menuHandler() {
  document.querySelector("#open-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
}
//Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahr =  (celsius * 9/5)+ 32;
  return fahr;
}

//Greeting section
function greetingHandler() {
let  greetingText;
let currentHour = new Date().getHours();
if (currentHour < 12) {
  greetingText = "Good Morning";
} else if (currentHour < 19) {
  greetingText = "Good Afternoon";
} else if (currentHour < 24) {
  greetingText = "Good Evening";
} else {
  greetingText = "Welcome!";
}
document.querySelector("#greeting").innerHTML = greetingText;

const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 30;

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and the temperature is ${temperature.toFixed(2)}°C.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and the temperature is ${celsiusToFahrenheit(temperature).toFixed(2)}°F.`;
document.querySelector("p#weather").innerHTML = celsiusText;


document.querySelector(".weather-group").addEventListener("click", function(e){
  if (e.target.id === "celsius") {
    document.querySelector("p#weather").innerHTML = celsiusText;
  } else if (e.target.id === "fahr") {
    document.querySelector("p#weather").innerHTML = fahrText;
  }

});
}

function clockHandler() {
//Local time section
setInterval(() => {
  const localTime = new Date();
  document.querySelector("span[data-time='hours']").innerHTML = localTime.getHours().toString().padStart(2, "0");
  document.querySelector("span[data-time='minutes']").innerHTML = localTime.getMinutes().toString().padStart(2, "0");
  document.querySelector("span[data-time='seconds']").innerHTML = localTime.getSeconds().toString().padStart(2, "0");
}, 1000);
}
//Gallery section
function galleryHandler() {
let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");
mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

galleryImages.forEach(function(image, index) {
  let thumb = document.createElement("img");
  thumb.src = image.src;
  thumb.alt = image.alt;
  thumb.dataset.arrayIndex = index;
  thumb.dataset.selected = index === 0 ? "true" : "false";
  thumb.addEventListener("click", (e) => {
    let selectedIndex = e.target.dataset.arrayIndex;
    let selectedImage = galleryImages[selectedIndex];
    mainImage.src = selectedImage.src;
    mainImage.alt = selectedImage.alt;

    thumbnails.querySelectorAll("img").forEach(function(img) {
      img.dataset.selected = false;
    });

    e.target.dataset.selected = "true";
  });
  thumbnails.appendChild(thumb);
})
}


// filters an array of products based on the provided filter parameter.
//  The function takes a filter parameter and it returns a new filtered array of products. 
// It uses the Array.prototype.filter() method to filter the products array based on the filter parameter.
//  The filter parameter can be "all", "paid" or "free". If the filter parameter is "all", it returns all 
// the products in the array. If the filter parameter is "paid", it returns the products that have a price 
// greater than zero. If the filter parameter is "free", it returns the products that have a price equal to zero.
function filterProducts(filter) {
  return products.filter((product) => {
    switch (filter) {
      case "all":
        return true;
      case "paid":
        return product.price > 0;
      case "free":
        return product.price === 0;
    }
  });
}

// populates a webpage with product information by creating and appending HTML elements to 
// the element with the class "products-area". The function takes an optional filter parameter 
// with a default value of "all" which is passed to the "filterProducts" function to filter the 
// products that are displayed. It first clears the contents of the "products-area" element
// using innerHTML = ""; Then for each product in the filtered array it creates a "div" element 
// with class "product-item" and appends it to the "products-area" element. Then it creates an "img" 
// element to display the product image, and a "div" element with class "product-details" to hold the 
// product title, author and price. it creates "h3","p" elements for title, author and price respectively 
// and then it appends the created elements to the "div" element with class "product-details" ,
//  then the image and the details to the "product-item" element and finally it appends the "product-item"
// element to the "products-area"
function populateProducts(filter = "all") {
  const productsElm = document.querySelector(".products-area");
  productsElm.innerHTML = "";

  filterProducts(filter).forEach((product) => {
    const productElm = document.createElement("div");
    productElm.classList.add("product-item");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.title;

    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    const productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    const productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;

    const productPriceTitle = document.createElement("p");
    productPriceTitle.classList.add("price-title");
    productPriceTitle.textContent = "Price";

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent =
      product.price > 0 ? `$ ${product.price.toFixed(2)}` : "Free";

    productDetails.appendChild(productTitle);
    productDetails.appendChild(productAuthor);
    productDetails.appendChild(productPriceTitle);
    productDetails.appendChild(productPrice);

    productElm.appendChild(productImage);
    productElm.appendChild(productDetails);

    productsElm.appendChild(productElm);
  });
}


//page load
window.addEventListener("load", () => {
  menuHandler();
  greetingHandler();
  clockHandler();
  galleryHandler();
  populateProducts();

});