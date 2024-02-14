let discountTerm = 200;
let total = 0.0;
let count = 0;
function handleClick(data) {
  const productName = data.parentNode.querySelector('h2').innerText;
  const productPrice = data.parentNode.querySelector('p').innerText;
  const productList = document.getElementById("product-list");
  const addedItem = document.createElement("div");
  const addedItemName = document.createElement("h4");
  const addedItemPrice = document.createElement("h4");
  count++;
  addedItemName.innerText = count + ". " + productName;
  addedItemName.style.fontWeight = 'bold';
  addedItemName.style.fontSize = '18px';
  
  addedItemPrice.innerText = productPrice;
  addedItemPrice.style.fontWeight = 'bold';
  addedItemPrice.style.fontSize = '18px';
  
  addedItem.appendChild(addedItemName);
  addedItem.appendChild(addedItemPrice);

  addedItem.style.display = 'flex';
  addedItem.style.justifyContent = 'space-between';

  productList.appendChild(addedItem);

  total = parseFloat(total) + parseFloat(productPrice);
  document.getElementById("total").innerText = total.toFixed(2);
  document.getElementById("total-price").innerText = total.toFixed(2);

  if (total > discountTerm) {
    document.getElementById("discount-btn").removeAttribute("disabled");
  } else {
    document.getElementById("discount-btn").setAttribute("disabled", true);
  }
  const purchaseButton =  document.getElementById("purchase-btn").removeAttribute("disabled");
  if(purchaseButton > total){
    document.getElementById("purchase-btn").removeAttribute("disabled");
  }
}

// Discount Button.
document.getElementById("discount-btn").addEventListener("click", function () {
  const inputField = document.getElementById("discount-field");
  const discountCode = inputField.value;
  const totalString = document.getElementById("total").innerText;
  const totalAmount = parseFloat(totalString);
  const totalPrice = document.getElementById('total-price');
  
  if (discountCode === "SELL200") {
    const discount = (20 / 100) * totalAmount;
    

    const discountedPrice = totalAmount - discount;
    
    
    const discountCalculate = document.getElementById("discount-price");
   

    discountCalculate.innerText = discount.toFixed(2);
   totalPrice.innerText = discountedPrice.toFixed(2);
   inputField.value = "";
  }
  else{
    alert ("Invalid discount code.");
    inputField.value = "";
  }
});
document.getElementById('home-btn').addEventListener('click', function(){
  location.reload();
})


document.getElementById('discount-field').addEventListener('keyup', function(e){
  if(e.key === 'Enter'){
    const inputField = document.getElementById("discount-field");
  const discountCode = inputField.value;
  const totalString = document.getElementById("total").innerText;
  const totalAmount = parseFloat(totalString);
  const totalPrice = document.getElementById('total-price');
  
  if (discountCode === "SELL200") {
    const discount = (20 / 100) * totalAmount;
    

    const discountedPrice = totalAmount - discount;
    
    
    const discountCalculate = document.getElementById("discount-price");
   

    discountCalculate.innerText = discount.toFixed(2);
   totalPrice.innerText = discountedPrice.toFixed(2);
   inputField.value = "";
  }
  else{
    alert ("Invalid discount code.");
    inputField.value = "";
  }
  }
})