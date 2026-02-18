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
let temperature = 35.78;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and the temperature is ${temperature.toFixed(2)}°C.`;
document.querySelector("p#weather").innerHTML = weatherText;
