/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

document.addEventListener("DOMContentLoaded", function () {
   const element = document.getElementById("payment-button");
   element.addEventListener("click", () => {
      element.className = "order-summary-container__payment-processing";
      let div1 = document.createElement("div");
      element.innerHTML = "";
      element.appendChild(div1);
   });
});
