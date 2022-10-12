let data;



  const AddNewPhone = document.getElementById("add-button");

  AddNewPhone.addEventListener('click', () => {
    const PhoneNameValue = document.getElementById('add-PhoneName').value;
    const PriceValue = document.getElementById('add-Price').value;
    const PhonePhotoValue = document.getElementById('add-PhonePhoto').value;
    const descriptionValue = document.getElementById('add-description').value;
    const LocationValue = document.getElementById('add-Location').value;
    const addComfirm = document.getElementById("add-comfirm");
    addComfirm.innerHTML = ("Phone is add!!!");

    const data = {
        PhoneName: PhoneNameValue,
        price: PriceValue,
        PhonePhoto: PhonePhotoValue,
        ItemDescription: descriptionValue,
        ItemLocation: LocationValue,

  };

  fetch("https://63452fa5dcae733e8feb86d1.mockapi.io/MobilePhone", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log('its works', data);
      
    });

});



