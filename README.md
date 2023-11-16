# Dynamic Phone Cards

This project is a web application that allows users to search for phones and view their details in a popup. It uses the [Programming Hero API](https://openapi.programming-hero.com/) to fetch phone data dynamically.

## Live Demo
Check out the live demo [here](https://shah9380.github.io/dynamic-phone-cards/).

## Screenshots

Include some screenshots of different sections of your application to provide a visual overview.

### Home Page
![image](https://github.com/shah9380/dynamic-phone-cards/assets/130676464/79b69bdf-8c9b-448a-90e5-ba906e07dbb2)



### Search Section
![image](https://github.com/shah9380/dynamic-phone-cards/assets/130676464/9c8cd84c-551f-454d-9bf8-8b1adb0fe3cb)


### Phone Details Popup
![image](https://github.com/shah9380/dynamic-phone-cards/assets/130676464/081a0cbf-272e-4abc-9bc6-7c2e4cdac876)


## Features

- Users can search for phones.
- Clicking on "SHOW DETAILS" displays a popup with detailed phone information.
- Responsive design for various screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API

## How to Use

1. Clone the repository:

```bash
git clone https://github.com/shah9380/dynamic-phone-cards.git
```
Open index.html in your preferred web browser.

Enter a phone name in the search bar and click the "SEARCH" button.

Click on "SHOW DETAILS" to view detailed information about a phone.

Code Structure
1.index.html: HTML structure of the webpage.
2.style.css: CSS styles for the webpage.
3.script.js: JavaScript logic for fetching and displaying phone data.

Functionality
Event Listener for DOMContentLoaded

document.addEventListener('DOMContentLoaded', function () {
  // Code to be executed when the DOM is fully loaded
});

Fetching Phone Data

function phonerender(phonename) {
  // ...
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      dataArray = data.data;
      // Code to render phone cards based on the fetched data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

Rendering Phone Cards

function createACard(element) {
  // ...
  const showDetailsBtn = card.querySelector('button[name="showdetails"]');
  showDetailsBtn.addEventListener('click', () => {
    // Code to fetch and display detailed information in a popup
  });
  container.appendChild(card);
}

Displaying Popup

function showPopup() {
  // ...
  document.body.appendChild(popup);
  // Code to center the popup on the screen
  // Event listener for the close button
  // ...
}

Handling Responsive Design

// ...
@media only screen and (min-width: 1000px) {
  // Media query for larger screens
}

@media only screen and (max-width: 1000px) {
  // Media query for screens up to 1000px width
}

@media only screen and (max-width: 600px) {
  // Media query for screens up to 600px width
}
// ...

Additional Features

// ...
const closeBtn = popup.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => {
  document.body.removeChild(popup);
  document.body.removeChild(overlay);
});
// ...

These elements collectively contribute to the functionality of your web application, allowing users to search for phones, view basic details, and see more detailed information in a popup. The code also incorporates responsive design principles to enhance the user experience on different devices.

Acknowledgments
This project is built using the Programming Hero API. Visit Programming Hero for more information.


