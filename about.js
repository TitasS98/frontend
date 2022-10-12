const phoneId = localStorage.getItem("phoneId");

const OneMobilePhoneInfo = () =>{
fetch(`https://63452fa5dcae733e8feb86d1.mockapi.io/MobilePhone/${phoneId}`)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log("data", data);
    
    const ProductName = document.getElementById("product-name");
    ProductName.innerHTML = data.PhoneName;

    const ProductPrice = document.getElementById("product-price");
    ProductPrice.innerHTML = data.price + ("eur");

    const ProductLocation = document.getElementById("product-location");
    ProductLocation.innerHTML = data.ItemLocation;

    const ProductInfo = document.getElementById("product-info");
    ProductInfo.innerHTML = data.ItemDescription;

    const ProductPhoto = document.getElementById("product-picture");
    ProductPhoto.src = data.PhonePhoto;



  

});
};
OneMobilePhoneInfo();


const deleteItem = (phoneId) => {
  fetch(`https://63452fa5dcae733e8feb86d1.mockapi.io/MobilePhone/${phoneId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      setTimeout(() => {
        const notificationEl = document.getElementById("notification-text");
        notificationEl.classList.remove('hidden');
      }, '2000');
    })
    .catch((err) => console.log('err', err));
};

const removeItemButton = document.getElementById("remove-phone");

removeItemButton.addEventListener('click', (e) => {
  deleteItem(phoneId);
});
