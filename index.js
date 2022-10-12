
fetch("https://63452fa5dcae733e8feb86d1.mockapi.io/MobilePhone")
.then((response) => {
    return response.json();
})
.then((data) => {
    data.sort((a, b) => a.price - b.price);
    console.log("data", data);
    

    const productsWrapper = document.getElementById("products");
    data.forEach((product) => {
        const productWrapper = document.createElement("div")
        productWrapper.classList.add("product");

        const PhoneImage = document.createElement("div")
        PhoneImage.classList.add("product-img")
        PhoneImage.style.backgroundImage = `url(${product.PhonePhoto})`;
        productWrapper.append(PhoneImage);

        const PhoneName = document.createElement("div");
        PhoneName.classList.add("product-name");
        PhoneName.innerHTML = product.PhoneName;
        productWrapper.append(PhoneName);

        const PhonePrice = document.createElement("div");
        PhonePrice.classList.add("product-price");
        PhonePrice.innerHTML = product.price + ("€");
        productWrapper.append(PhonePrice);

        PhoneImage.addEventListener("click", () => {
            localStorage.setItem("phoneId", product.id);
            window.location.replace("./about.html");

            
        })


        productsWrapper.append(productWrapper);





        

    });
})