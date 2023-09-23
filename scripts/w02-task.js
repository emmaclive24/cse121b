/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Clive Tumbare';
currentYear = 2023;
profilePicture = './images/profile.jpg';
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `Profile Image of ${fullName}`);


/* Step 5 - Array */

let favoriteFood = [];

favoriteFood.push("Brown rice");

favoriteFood.push("Sadza");

favoriteFood.push("Chicken Stew");

favoriteFood.push("Roasted Beef");

favoriteFood.push("Pizza");

favoriteFood.push("Samosa");

foodElement.innerHTML += `<br>${favoriteFood}`;

//removing array's first element

favoriteFood.shift();

foodElement.innerHTML += `<br>${favoriteFood}`;

//removing array's last element
favoriteFood.pop();

foodElement.innerHTML += `<br>${favoriteFood}`;

