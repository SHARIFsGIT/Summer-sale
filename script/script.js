let discountTerm = 200;
let total = 0.0;
let count = 0;
function handleClick(data) {
  const productName = data.childNodes[3].childNodes[3].innerText;
  console.log(productName);
  const price = data.childNodes[3].childNodes[5].innerText.split(" ")[0];
  console.log(price);
  const productList = document.getElementById("product-list");
  const h4 = document.createElement("h4");
  count++;
  h4.innerText = count + ". " + productName;
  h4.style.fontWeight = 'bold';
  h4.style.fontSize = '18px';

  productList.appendChild(h4);
  total = parseFloat(total) + parseFloat(price);
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