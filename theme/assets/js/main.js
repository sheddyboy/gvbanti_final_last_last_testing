let productName = document.querySelector("#co_Name");
let productPrice = document.querySelector("#co_Price");
let inventory = document.querySelector(".co_inventory");
let inputQuantity = document.querySelector(".co_input_quantity");
let submitButton = document.querySelector("#email-form");
let paymentMethod = document.querySelector("#field-4");
let orderID = document.querySelector("#orderID");

let idGenerator = Math.floor(Math.random() * 1000000) + 1;




submitButton?.addEventListener("submit", (e) => {
    e.preventDefault();
    orderID.value = idGenerator;
   let successData = {
        productName: productName.textContent,
        productPrice: productPrice.textContent,
        inventory: inventory.textContent,
        inputQuantity: inputQuantity.value,
        paymentMethod: paymentMethod.value,
        orderID: idGenerator
    };

    localStorage.setItem("successData", JSON.stringify(successData));   
    
    window.location.href = "/success"
});