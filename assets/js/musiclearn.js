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
        rname: "Karnataka Music",
        location: "123, South Bangalore Road, Bangalore, Karnataka",
        price: "Rs.1000 Per Person for 1 week",
        // dish: "Dishes : Masala Dosa, Ragi Mudde, Mysore Pak",
        image: "../assets/img/learn.1.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
   },
   {
    rname: "Carnatic Music Classes",
    location: "Address : Mangalorean Fish Curry, Neer Dosa, Goli Baje",
    price: "Cost : Rs.2000 Per Person for 1 week",
    // dish: "Dishes : Mangalorean Fish Curry, Neer Dosa, Goli Baje",
    image: "../assets/img/learn.2.jpeg",
    contact: "Email: info@coastalkarnatakaflavors.com, Phone: +91 987-654-3210"
   },
   {
    rname: "Community Music Classes",
    location: "K789, North Karnataka Street, Hubli, Karnatakat",
    price: "Cost : Rs.650 Per Person",
    // dish: "Dishes : Jolada Rotti, Enne Badanekayi, Holige",
    image: "../assets/img/learn.3.jpeg",
    contact: "Email: info@northkarnatakasavoring.com, Phone: +91 765-432-1098"
   },
//    {
//     rname: "Kodagu Culinary Journey",
//     location: "101, Coorg Hills, Madikeri, Karnataka",
//     price: "Cost : Rs.900 Per Person",
//     // dish: "Dishes : Pandi Curry, Noolputtu, Bamboo Shoot Curry",
//     image: "../assets/img/learn.4.jpeg",
//     contact: "Email: info@kodagucuisinejourney.com, Phone: +91 111-222-3333"
//    },
//    {
//     rname: "Traditional Mysorean Cooking",
//     location: "321, Mysore Heritage Lane, Mysore, Karnataka",
//     price: "Cost : Rs.1200 Per Person",
//     // dish: "Dishes : Bisi Bele Bath, Mysore Masala Dosa, Mysore Pak",
//     image: "../assets/img/learn.5.jpeg",
//     contact: " Email: info@traditionalmysoreancooking.com, Phone: +91 999-888-7777",
//    },
],
};
}

else if (state == "Jammu and Kashmir")
{
     restaurant = {
        data:[
       {
            rname: "Jammu music Class",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            // dish: "Dosa",
            image: "../assets/img/learn.1.jpeg",
            contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "jammu music Classes",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        // dish: "Dosa",
        image: "../assets/img/learn.2.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "Jammu Folk music Classes",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        // dish: "Dosa",
        image: "../assets/img/learn.3.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
    //    {
    //     rname: "Udupi Swaad",
    //     location: "Kumarswamy Layout",
    //     price: "Rs.200 Per Person",
    //     dish: "Dosa",
    //     image: "../assets/img/learn.4.jpeg",
    //    },
    //    {
    //     rname: "Udupi Swaad",
    //     location: "Kumarswamy Layout",
    //     price: "Rs.200 Per Person",
    //     dish: "Dosa",
    //     image: "../assets/img/learn.5.jpeg",
    //    },
    ],
    };
}

else if (state == "Telangana"){
     restaurant = {
        data:[
       {
            rname: "Bollywood music Classes",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            // dish: "Dosa",
            image: "../assets/img/learn.1.jpeg",
            contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "Hollywood Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        // dish: "Dosa",
        image: "../assets/img/learn.2.jpeg",
        contact: "Email: info@karnathbfakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "hindustani masti",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        // dish: "Dosa",
        image: "../assets/img/learn.3.jpeg",
        contact: "Email: info@khysbjcarnatakamusic.com, Phone: +91 123-456-7890"
       },
    //    {
    //     rname: "Udupi Swaad",
    //     location: "Kumarswamy Layout",
    //     price: "Rs.200 Per Person",
    //     dish: "Dosa",
    //     image: "../assets/img/learn.4.jpeg",
    //    },
    //    {
    //     rname: "Udupi Swaad",
    //     location: "Kumarswamy Layout",
    //     price: "Rs.200 Per Person",
    //     dish: "Dosa",
    //     image: "../assets/img/learn.5.jpeg",
    //    },
    ],
    };
}

else if (state == "Gujarat") {
     restaurant = {
        data:[
       {
            rname: "gujarat music world",
            location: "Kumarswamy Layout",
            price: "Rs.400 Per Person",
            // dish: "Dosa",
            image: "../assets/img/learn.1.jpeg",
            contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        // dish: "Dosa",
        image: "../assets/img/learn.2.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        // dish: "Dosa",
        image: "../assets/img/learn.3.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
    //    {
    //     rname: "Udupi Swaad",
    //     location: "Kumarswamy Layout",
    //     price: "Rs.200 Per Person",
    //     dish: "Dosa",
    //     image: "../assets/img/learn.4.jpeg",
    //    },
    //    {
    //     rname: "Udupi Swaad",
    //     location: "Kumarswamy Layout",
    //     price: "Rs.200 Per Person",
    //     dish: "Dosa",
    //     image: "../assets/img/learn.5.jpeg",
    //    },
    ],
    };
}

else{
     restaurant = {
        data:[
       {
            rname: "assam Grand",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            // dish: "Dosa",
            image: "../assets/img/learn.1.jpeg",
            contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "assam music world",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        // dish: "Dosa",
        image: "../assets/img/learn.2.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "Assam folk world",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        // dish: "Dosa",
        image: "../assets/img/learn.3.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
    //    {
    //     rname: "Udupi Swaad",
    //     location: "Kumarswamy Layout",
    //     price: "Rs.200 Per Person",
    //     dish: "Dosa",
    //     image: "../assets/img/learn.4.jpeg",
    //    },
    //    {
    //     rname: "Udupi Swaad",
    //     location: "Kumarswamy Layout",
    //     price: "Rs.200 Per Person",
    //     dish: "Dosa",
    //     image: "../assets/img/learn.5.jpeg",
    //    },
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

