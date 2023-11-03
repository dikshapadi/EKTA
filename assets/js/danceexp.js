const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const state = urlParams.get("state");

// Use the selectedCity variable in your JavaScript code
console.log(`You Have selected: ${state}`);

document.getElementById("header").innerHTML = state;
var dance;

if(state == "Karnataka"){

 dance = {
    data:[
   {
        dname: "Yakshagana",
        desc: "Yakshagana, dance-drama of South India, associated most strongly with the state of Karnataka. Elaborate and colourful costumes, makeup, and masks constitute some of the most-striking features of the art form. Traditionally, yakshagana was performed in the open air by all-male troupes sponsored by various Hindu temples. Yakshagana typically presents stories from Hindu epics like the Mahabharata, Ramayana, and the Puranas, as well as local folklore. The performances often revolve around the triumph of good over evil and the tales of gods, goddesses, and heroes.The performers of Yakshagana wear vibrant and ornate costumes, including colorful headgear, masks, and makeup. The characters are easily distinguishable, and the costumes play a significant role in conveying their identities.",
        image: "../assets/img/yakshagana.jpg",
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
    name.classList.add("dname");
    name.innerText = i.dname.toUpperCase();
    container.appendChild(name);

    let desc = document.createElement("h5");
    desc.innerText = i.desc;
    container.appendChild(desc);

    card.appendChild(container);
    document.getElementById("dance").appendChild(card);
}


