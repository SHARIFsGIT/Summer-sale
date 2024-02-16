let discountTerm = 200;
let total = 0.0;
let count = 0;

function handleDiscount(totalAmount) {
  const discountCode = document.getElementById("discount-field").value;
  const totalPrice = document.getElementById('total-price');
  const discountCalculate = document.getElementById("discount-price");

  if (discountCode === "SELL200") {
    const discount = (20 / 100) * totalAmount;
    const discountedPrice = totalAmount - discount;

    discountCalculate.innerText = discount.toFixed(2);
    totalPrice.innerText = discountedPrice.toFixed(2);
    return true;
  } else {
    alert("Invalid discount code.");
    return false;
  }
}

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
  
  document.getElementById("purchase-btn").removeAttribute("disabled");
}

document.getElementById("discount-btn").addEventListener("click", function () {
  const totalString = document.getElementById("total").innerText;
  const totalAmount = parseFloat(totalString);

  if (handleDiscount(totalAmount)) {
    document.getElementById("discount-field").value = "";
  }
});

document.getElementById('home-btn').addEventListener('click', function(){
  location.reload();
});

document.getElementById('discount-field').addEventListener('keyup', function(e){
  if(e.key === 'Enter'){
    const totalString = document.getElementById("total").innerText;
    const totalAmount = parseFloat(totalString);
    handleDiscount(totalAmount);
    document.getElementById("discount-field").value = "";
  }
});