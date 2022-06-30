let nData = JSON.parse(localStorage.getItem("successData"));
let spProductName = document.querySelector("#os_OrderName");
let spProductStock = document.querySelector("#os_InStock");
let spProductUnitPrice = document.querySelector("#os_UnitPrice");
let spProductQty = document.querySelector("#os_Quantity");
let spProductTotalAmount = document.querySelector("#os_TotalAmount");
let spOrderSummary = document.querySelector("#os_OrderSummary");
let pmTotalAmount = document.querySelector("#pmd_TotalAmount");
let pmDescription = document.querySelector("#pmd_Description");
let btcTotalAmount = document.querySelector("#btc_TotalAmount");
let usdtTotalAmount = document.querySelector("#usdt_TotalAmount");
let btcDescription = document.querySelector("#btc_Description");
let usdtDescription = document.querySelector("#usdt_Description");
let usdtSection = document.querySelector("#usdt--section");
let btcSection = document.querySelector("#btc--section");
let pmSection = document.querySelector("#pm--section");


function paymentCheck(){
    if(nData.paymentMethod == "BTC"){
        $('#pm--section').hide();
        $('#usdt--section').hide();
    };
    if(nData.paymentMethod == "USDT"){
        $('#pm--section').hide();
        $('#btc--section').hide();
    };
    if(nData.paymentMethod == "PM"){
        $('#btc--section').hide();
        $('#usdt--section').hide();
    };
}

if(nData) {
    spProductName.innerHTML = nData.productName;
    spProductStock.innerHTML = nData.inventory;
    spProductUnitPrice.innerHTML = nData.productPrice;
    spProductQty.innerHTML = nData.inputQuantity;
    spProductTotalAmount.innerHTML = spProductUnitPrice.textContent * spProductQty.textContent;
    spOrderSummary.innerHTML = nData.orderID;
    pmTotalAmount.innerHTML = spProductTotalAmount.innerHTML;
    pmDescription.innerHTML = spOrderSummary.innerHTML;
    btcTotalAmount.innerHTML = spProductTotalAmount.innerHTML;
    usdtTotalAmount.innerHTML = spProductTotalAmount.innerHTML;
    btcDescription.innerHTML = spOrderSummary.innerHTML;
    usdtDescription.innerHTML = spOrderSummary.innerHTML;

    paymentCheck();
}