document.addEventListener('DOMContentLoaded', function () {
  let inputwehave = document.getElementById('searched_phone');
  let searchbtn = document.getElementById('search');
  let dataArray = [];
  phonerender(13);
  searchbtn.addEventListener('click',()=>{
    container.innerHTML = "";
    const searched_phone = inputwehave.value.toLowerCase();
    phonerender(searched_phone);
  }); // Initializing an empty array to store the fetched data

  let container = document.getElementById('cards_container');
  const showAllBtn = document.getElementById('showAllBtn');
  showAllBtn.style.display = "none";
function phonerender(phonename){
  dataArray = [];
  const apiUrl = `https://openapi.programming-hero.com/api/phones?search=${phonename}`;
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Assuming the response data contains an array of phones
    dataArray = data.data; // Assigning the 'data' array to the dataArray variable // Output the dataArray or perform other operations
      // dataArray.forEach((element) => {
      //   createACard(element);
      // });
      if(dataArray.length<12){
        for(let i=0;i<dataArray.length;i++){
          createACard(dataArray[i]);
        }
      }else{
        for(let i=0;i<12;i++){
          createACard(dataArray[i]);
        }
      }
      if(dataArray.length>12){
        showAllBtn.style.display = "block";
        showAllBtn.addEventListener('click',()=>{
          for(let i=12;i<dataArray.length;i++){
            createACard(dataArray[i]);
          }
          showAllBtn.style.display = "none";
        });
      }
      console.log(dataArray);
    // const filteredone = dataArray.filter((element)=>{
    //     if(element.phone_name.toLowerCase().includes("find")){
    //         return true;
    //     }
    // });
    // console.log(filteredone);
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
};
function createACard(element) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<img src="${element.image}" alt="">
    <h4>${element.phone_name}</h4>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <button name="showdetails">SHOW DETAILS</button>`;

  const showDetailsBtn = card.querySelector('button[name="showdetails"]');
  
  showDetailsBtn.addEventListener('click', () => {
    console.log(element.slug);
    // Add any additional functionality you want to perform when the button is clicked
        const apiUrl = `https://openapi.programming-hero.com/api/phone/${element.slug}`
        fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Assuming the response data contains an array of phones
          dataArray = data.data; // Assigning the 'data' array to the dataArray variable // Output the dataArray or perform other operations
            // dataArray.forEach((element) => {
            //   createACard(element);
            // });
            console.log("show details",dataArray.name);
            console.log("show details",dataArray);
            function showPopup() {
              // Create overlay
              const overlay = document.createElement('div');
              overlay.classList.add('overlay');
              document.body.appendChild(overlay);
            
              const popup = document.createElement('div');
              popup.classList.add('popup');
              const features=dataArray.mainFeatures;
              let string = "";
              for(const key in features){
                string = string + `${key}: ${features[key]} <br>`;
              }
              let exp = "";
              if(dataArray.releaseDate){
                  exp = 'Exp. ';
              }
              popup.innerHTML = `
                    <figure>
                    <img src="${dataArray.image}" alt="">
                    </figure>
                    <h4>${dataArray.name}</h4>
                    <p>Brand: ${dataArray.brand}</p>
                    <p>${string}</p>
                    <p>${exp}${dataArray.releaseDate}</p>
                    <button class="closeBtn">Close</button>`;
              
              document.body.appendChild(popup);
            
              // Center the popup on the screen
              const topPosition = window.innerHeight / 2 - popup.offsetHeight / 2;
              const leftPosition = window.innerWidth / 2 - popup.offsetWidth / 2;
            
              popup.style.position = 'fixed';
              popup.style.top = `${topPosition}px`;
              popup.style.left = `${leftPosition}px`;
            
              // Close the popup and remove overlay when the close button is clicked
              const closeBtn = popup.querySelector('.closeBtn');
              closeBtn.addEventListener('click', () => {
                document.body.removeChild(popup);
                document.body.removeChild(overlay);
              });
            
              // Close the popup and remove overlay after 3 seconds (adjust as needed)
            }
            
            
            
            showPopup();
          // const filteredone = dataArray.filter((element)=>{
          //     if(element.phone_name.toLowerCase().includes("find")){
          //         return true;
          //     }
          // });
          // console.log(filteredone);
        })
        .catch(error => {
          console.error('There was a problem fetching the data:', error);
        });
  });

  container.appendChild(card);
}

  
});
