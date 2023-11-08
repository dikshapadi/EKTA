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
        rname: "Yakshagana Dance Classes",
        location: "123, South Bangalore Road, Bangalore, Karnataka",
        price: "Rs.800 Per head",
        image: "../assets/img/kathak3.jpg",
        contact: "Email: info@karnatakadelights.com, Phone: +91 123-456-7890"
   },
   {
    rname: "Bharatnatiyam",
    location: "Address : Mangalore ",
    price: "Cost : Rs.1000 Per Person",
    image: "../assets/img/bharat2.jpg",
    contact: "Email: info@coastalkarnatakaflavors.com, Phone: +91 987-654-3210"
   },
   {
    rname: "Huli Dance",
    location: "K789, North Karnataka Street, Hubli, Karnatakat",
    price: "Cost : Rs.650 Per Person",
    image: "../assets/img/kathak3.jpg",
    contact: "Email: info@northkarnatakasavoring.com, Phone: +91 765-432-1098"
   },
],
};
}

else if (state == "Jammu and Kashmir")
{
     restaurant = {
        data:[
       {
            rname: "Rouf",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            image: "../assets/img/learn.1.jpeg",
       },
       {
        rname: "Dumhal Dance",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.2.jpeg",
       },
       {
        rname: "Hafiza Dance",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.3.jpeg",
       },
    ],
    };
}

else if (state == "Telangana"){
     restaurant = {
        data:[
       {
            rname: "Gussadi Dance",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            image: "../assets/img/learn.1.jpeg",
       },
       {
        rname: "Dhimsa Dance",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.2.jpeg",
       },
       {
        rname: "Perini Sivatandavam",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.3.jpeg",
       },
    ],
    };
}

else if (state == "Assam") {
     restaurant = {
        data:[
       {
            rname: "Bihu",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            image: "../assets/img/learn.1.jpeg",
       },
       {
        rname: "Bagurumba",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.2.jpeg",
       },
       {
        rname: "Ojapali Dance",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.3.jpeg",
       },
    ],
    };
}

else{
     restaurant = {
        data:[
       {
            rname: "Garba",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            image: "../assets/img/learn.1.jpeg",
       },
       {
        rname: "Dandiya",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.2.jpeg",
       },
       {
        rname: "Tippani",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/learn.3.jpeg",
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

    let address = document.createElement("h5");
    address.innerText = i.location;
    container.appendChild(address);

    let contact = document.createElement("h5");
    contact.innerText = i.contact;
    container.appendChild(contact);


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

