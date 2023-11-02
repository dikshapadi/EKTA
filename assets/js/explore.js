// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach(dropdown => {
//     const select = dropdown.querySelector('.select');
//     const caret = dropdown.querySelector('.caret');
//     const menu = dropdown.querySelectorAll('.menu');
//     const options = dropdown.querySelectorAll('.menu li');
//     const selected = dropdown.querySelector('.selected');


//     select.addEventListener('click', () => {
//         select.classList.toggle('select-clicked');
//         caret.classList.toggle('caret-rotate');
//         menu.classList.toggle('menu-open');

//     });

//     options.forEach(option => {
//         option.addEventListener('click', () => {
//             selected.innerText = option.innerText;
//             select.classList.remove('select-clicked');
//             caret.classList.remove('caret-rotate');
//             menu.classList.remove('menu-open');

//             options.forEach(option => {
//                 option.classList.remove('active');
//             });

//             option.classList.add('active');
//         });
//     });
// });



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const state = urlParams.get("state");

// Use the selectedCity variable in your JavaScript code
console.log(`You Have selected: ${state}`);

document.getElementById("header").innerHTML = state;
var restaurant;

if(state == "Karnataka"){

 restaurant = {
    data:[
   {
        rname: "Vidyarthi Bhawan",
        location: "Address : 32, Gandhi Bazaar Main Rd, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004",
        price: "Approx Cost : Rs.100",
        dish: "Speciality : Masala Dosa",
        image: "../assets/img/exp1.jpeg",
   },
   {
    rname: "Machali",
    location: "Behind Ocean Pearl, Sharada Vidyalaya Rd, Kodailbail, Mangaluru, Karnataka 575003",
    price: "Approx Cost : Rs.200",
    dish: "Speciality: Fish curry, Neer Dosa, Manglore Buns",
    image: "../assets/img/exp2.jpeg",
   },
   {
    rname: "Old Sagar Benne Dose",
    location: "Mahila Samaja complex, Prince Jayachamaraja Wodeyar, Hadadi Rd, PravasiMandir road, Davanagere, 02",
    price: "Approx Cost : Rs.100",
    dish: "Benne Dose, ",
    image: "../assets/img/exp3.jpeg",
   },
   {
    rname: "Udupi Swaad",
    location: "Kumarswamy Layout",
    price: "Rs.200 Per Person",
    dish: "Dosa",
    image: "../assets/img/img1.4.jpeg",
   },
   {
    rname: "Udupi Swaad",
    location: "Kumarswamy Layout",
    price: "Rs.200 Per Person",
    dish: "Dosa",
    image: "../assets/img/img1.5.jpeg",
   },
],
};
}

else if (state == "Punjab")
{
     restaurant = {
        data:[
       {
            rname: "Punjabi Grand",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            dish: "Dosa",
            image: "../assets/img/img1.1.jpeg",
       },
       {
        rname: "Punjabi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.2.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.3.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.4.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.5.jpeg",
       },
    ],
    };
}

else if (state == "Delhi"){
     restaurant = {
        data:[
       {
            rname: "Udupi Grand",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            dish: "Dosa",
            image: "../assets/img/img1.1.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.2.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.3.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.4.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.5.jpeg",
       },
    ],
    };
}

else if (state == "Kerala") {
     restaurant = {
        data:[
       {
            rname: "Udupi Grand",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            dish: "Dosa",
            image: "../assets/img/img1.1.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.2.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.3.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.4.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.5.jpeg",
       },
    ],
    };
}

else{
     restaurant = {
        data:[
       {
            rname: "Vidyarthi Bhawan",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            dish: "Dosa",
            image: "../assets/img/exp1.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.2.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.3.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.4.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/img1.5.jpeg",
       },
    ],
    };
}

for(let i of restaurant.data){
    let card = document.createElement("div");
    card.classList.add("card");
    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h4");
    name.classList.add("rest-name");
    name.innerText = i.rname.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h5");
    price.innerText = i.price;
    container.appendChild(price);

    let dish = document.createElement("h5");
    dish.innerText = i.dish;
    container.appendChild(dish);

    let address = document.createElement("h5");
    address.innerText = i.location;
    container.appendChild(address);


    card.appendChild(container);
    document.getElementById("restaurant").appendChild(card);
}


document.getElementById("search").addEventListener("click",()   => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll("rest-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);

    elements.forEach( (element,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }

            else{
                cards[index].classList.add("hide");
            }

        }
);
});

