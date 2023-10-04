/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name: "Clive Tumbare",
    photo: "./images/profile.jpg",
    favoriteFoods: ["Rice", "Salads", "Mashed Potatoes", "Roasted Chicken"],
    hobbies: ["Fishing", "Cricket", "Church", "Gym"],
    placesLived: []
}


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "Mutare - Zim",
    length: "4 years"
});

myProfile.placesLived.push({
    place: "Pretoria - SA",
    length: "11 years"
});

myProfile.placesLived.push({
    place: "Lusaka - Zambia",
    length: "2 years"
});

myProfile.placesLived.push({
    place: "Bulawayo - Zim",
    length: "1 years"
});

/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").innerHTML = myProfile.name;

/* Photo with attributes */

const photo = document.querySelector("#photo");
photo.setAttribute("src", myProfile.photo);
photo.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
const favoriteFoodList = document.querySelector("#favorite-foods");
myProfile.favoriteFoods.forEach(food => {

    let item = document.createElement("li");

    item.textContent = food;

    favoriteFoodList.appendChild(item);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {

    let item = document.createElement("li");

    item.textContent = hobby;

    document.querySelector("#hobbies").appendChild(item);

});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {

    let dd = document.createElement("dd");

    let dt = document.createElement("dt");

    dt.textContent = place.place;

    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);

    document.querySelector("#places-lived").append(dd);

});