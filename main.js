//menu
document.querySelector("#open-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
//Greeting section
const greetingText = "Good Afternoon";
document.querySelector("#greeting").innerHTML = greetingText;
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 30;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and the temperature is ${temperature.toFixed(2)}°C.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and the temperature is ${celsiusToFahrenheit(temperature).toFixed(2)}°F.`;
document.querySelector("p#weather").innerHTML = celsiusText;

//Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
document.querySelector(".weather-group").addEventListener("click", (event) => {
  if (event.target.id === "celsius") {
    document.querySelector("p#weather").innerHTML = celsiusText;
  } else if (event.target.id === "fahrenheit") {
    document.querySelector("p#weather").innerHTML = fahrText;
  }

})
//Local time section
setInterval(() => {
  const localTime = new Date();
  document.querySelector("span[data-time='hours']").innerHTML = localTime.getHours().toString().padStart(2, "0");
  document.querySelector("span[data-time='minutes']").innerHTML = localTime.getMinutes().toString().padStart(2, "0");
  document.querySelector("span[data-time='seconds']").innerHTML = localTime.getSeconds().toString().padStart(2, "0");
}, 1000);

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