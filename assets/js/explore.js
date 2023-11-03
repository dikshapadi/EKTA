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
        rname: "Masala Dosa",
        location: "DESCRIPTION : Fermented crepe made from rice batter and black lentils and you stuff it with a lightly cooked filling of potatoes, fried onions and spices.",
        origin: "ORIGIN : Udupi",
        price: "APPROX COST : Rs.100",
        dish: "RESRTAURANT : Vidyarthi Bhawan(Bengaluru)",
        image: "../assets/img/exp1.jpeg",
   },
   {
    rname: "Fish Curry",
    location: "DESCRIPTION : Consists of sardines semi-stewed in a curry with assorted vegetables. Usually served with rice, naan, or bread",
    origin: "ORIGIN : Mangaluru",
    price: "APPROX COST : Rs.150",
    dish: "RESRTAURANT : Machali(Mangaluru)",
    image: "../assets/img/exp2.jpeg",
   },
   {
    rname: "Mysore Pak",
    location: "DESCRIPTION : Similar to a buttery and dense cookie, it is made of generous amounts of ghee, sugar, gram flour, and often cardamom",
    origin: "ORIGIN : Mysore",
    price: "APPROX COST : Rs.150/kg",
    dish: "RESRTAURANT : Mansukhlal Mittaiwala(Mysore)",
    image: "../assets/img/exp4.jpeg",
   },
   {
    rname: "Maddur Vada",
    location: "DESCRIPTION : Savoury fritter-type snack made from rice flour, cream of wheat or rava",
    origin: "ORIGIN : Maddur",
    price: "APPROX COST : Rs.50",
    dish: "RESRTAURANT : Mavalli Tiffin Room(Bengaluru)",
    image: "../assets/img/exp3.jpeg",
   },
   {
    rname: "Jolad Rotti",
    location: "DESCRIPTION : Indian bread made of sorghum bicolor consumed along with spicy curry or chutney",
    origin: "ORIGIN : Bijapur",
    price: "APPROX COST : Rs.50",
    dish: "RESRTAURANT : Rotti Mattu(Bengaluru)",
    image: "../assets/img/exp5.jpeg",
   },
],
};
}






else if(state == "Jammu and Kashmir"){

    restaurant = {
       data:[
      {
           rname: "Rogan Josh",
           location: "DESCRIPTION :A must try dish for all the Lamb or meat lovers, Rogan Josh, an aromatic lamb dish is one of the signature recipes of Kashmiri cuisine. ",
           origin: "ORIGIN : srinagar",
           price: "APPROX COST : Rs.400",
           dish: "RESRTAURANT : Shamyana restaurant(Srinagar)",
           image: "../assets/img/Rogan-Josh.jpg",
      },
      {
       rname: "Modur Pulav",
       location: "DESCRIPTION : This dish is sweet, flavoured and healthy with saffron as the main spice which gives it beautiful colour and taste.",
       origin: "ORIGIN : yusmarg",
       price: "APPROX COST : Rs.150",
       dish: "RESRTAURANT : Kashmiri Wazwan(yusmarg)",
       image: "../assets/img/exp2.jpeg",
      },
      {
       rname: ". Kashmiri Muji Gaad",
       location: "DESCRIPTION : Served on festivals and occasions, Kashmir gaad is a dish made up of fish prepared generally with radish or nadur. ",
       origin: "ORIGIN : Sonamerg",
       price: "APPROX COST : Rs.350/kg",
       dish: "RESRTAURANT : Ahdoos Restaurant(Sonamerg)",
       image: "../assets/img/exp4.jpeg",
      },
      {
       rname: " Lyodur Tschaman",
       location: "DESCRIPTION :  Lyodur Tschaman is cottage cheese cooked in creamy turmeric based gravy. ",
       origin: "ORIGIN : Dal Lake",
       price: "APPROX COST : Rs.110",
       dish: "RESRTAURANT : Vishal Dhaba(Dal Lake)",
       image: "../assets/img/exp3.jpeg",
      },
      {
       rname: "Wazwan",
       location: "DESCRIPTION : Wazwan, the traditional cuisine of Kashmir, is a gastronomic delight that showcases the rich flavors and aromatic spices of the region.",
       origin: "ORIGIN :yusmarg",
       price: "APPROX COST : Rs.50",
       dish: "RESRTAURANT : Kashmiri Wazwan(yusmarg)",
       image: "../assets/img/exp5.jpeg",
      },
   ],
   };
   }









   else if(state == "Telangana"){

    restaurant = {
       data:[
      {
           rname: "Sarva Pindi ",
           location: "DESCRIPTION :It is a savoury pancake made of rice flour, chana dal, peanuts and chilli. It is cooked in a deep, round shaped pan. ",
           origin: "ORIGIN : Hyderabad",
           price: "APPROX COST : Rs.100",
           dish: "RESRTAURANT : Deccan Pavilion(Hyderabad)",
           image: "../assets/img/exp1.jpeg",
      },
      {
       rname: "Golichina Mamsam",
       location: "DESCRIPTION :As Telangana cuisine is well-known for its spices, this dish incorporates succulent pieces of mutton into a thick gravy that is loaded with locally grown spices and cooked over low flame for hours ",
       origin: "ORIGIN :  Warangal",
       price: "APPROX COST : Rs.250",
       dish: "RESRTAURANT : Paradise Restaurant(Warangal)",
       image: "../assets/img/exp2.jpeg",
      },
      {
       rname: "Polelu",
       location: "DESCRIPTION :Ultra-thin flattened Indian bread with a stuffing made of jaggery, channa dal, cardamom powder and ghee, Polelu is a go to recipe for special festivals like Ganesh Chathurthi.",
       origin: "ORIGIN :  Nizamabad",
       price: "APPROX COST : Rs.50/piece",
       dish: "RESRTAURANT : Ahdoos Restaurant( Nizamabad)",
       image: "../assets/img/exp4.jpeg",
      },
      {
       rname: " Hyderabadi Biryani",
       location: "DESCRIPTION :  Thanks to the major influence of Nizams in the state, Hyderabadi Biryani has come to be known worldwide as one of India’s jeweled food items. ",
       origin: "ORIGIN : Hyderabad",
       price: "APPROX COST : Rs.110",
       dish: "RESRTAURANT : biryani Dhaba(Hyderabad)",
       image: "../assets/img/exp3.jpeg",
      },
      {
       rname: "Chegodilu",
       location: "DESCRIPTION : A tea-time accompaniment, Chegodilu is a crunchy snack item that is almost impossible to stop munching on after the first bite. ",
       origin: "ORIGIN : Begumpet",
       price: "APPROX COST : Rs.50",
       dish: "RESRTAURANT : Saffron Soul(Begumpet)",
       image: "../assets/img/exp5.jpeg",
      },
   ],
   };
   }





   else if(state == "Gujarat"){

    restaurant = {
       data:[
      {
           rname: "Dhokla",
           location: "DESCRIPTION :Gujarat's most frequently cooked and savored cuisines are the soft, spongy, and square-shaped pieces served with chutney.",
           origin: "ORIGIN : Gujarat.",
           price: "APPROX COST : Rs.100",
           dish: "RESRTAURANT : Deccan Pavilion(Gujarat)",
           image: "../assets/img/exp3.1.jpeg",
      },
      {
       rname: "Thepla",
       location: "DESCRIPTION :Like thin Parathas served for breakfast, Theplas are flatbreads made of fenugreek leaves, gram flour, and many spices. ",
       origin: "ORIGIN :  Kutch",
       price: "APPROX COST : Rs.250",
       dish: "RESRTAURANT : Anand Restaurants(Kutch)",
       image: "../assets/img/exp3.2.jpeg",
      },
      {
       rname: " Khichdi",
       location: "DESCRIPTION :Unlike normal Khichdi, there’s something about Gujarati Khichdi that makes it incredibly delicious. There’s a reason why it’s called the national food of India.",
       origin: "ORIGIN :  Ahmedabad",
       price: "APPROX COST : Rs.50/piece",
       dish: "RESRTAURANT : Ahdoos Restaurant( Ahmedabad)",
       image: "../assets/img/exp3.3.jpeg",
      },
      {
       rname: "Dabeli",
       location: "DESCRIPTION :  Texture-wise, both are the same, but Dabeli tastes slightly different.  ",
       origin: "ORIGIN :Kutch",
       price: "APPROX COST : Rs.110",
       dish: "RESRTAURANT : dabeli Dhaba(Kutch)",
       image: "../assets/img/exp3.4.jpeg",
      },
      {
       rname: "Jalebi",
       location: "DESCRIPTION : Traditionally, the jalebi recipe is made with a batter of all purpose flour, gram flour (besan), baking soda and water that is fermented for several hours. ",
       origin: "ORIGIN : Ahmedabad",
       price: "APPROX COST : Rs.20",
       dish: "RESRTAURANT : Saffron Soul(Ahmedabad)",
       image: "../assets/img/exp3.5.jpeg",
      },
   ],
   };
   }

   
 


   else{

    restaurant = {
       data:[
      {
           rname: "Momos",
           location: "DESCRIPTION :Momos, a popular Asian snack, are dumplings filled with savory ingredients, often served with a delicious dipping sauce..",
           origin: "ORIGIN : Guwahati",
           price: "APPROX COST : Rs.100",
           dish: "RESRTAURANT : Deccan Pavilion(Guwahati)",
           image: "../assets/img/exp3.1.jpeg",
      },
      {
       rname: " Maasor Tenga",
       location: "DESCRIPTION :A household favourite, this graceful dish of Assamese cuisine is extremely refreshing on the palette. The fish is slow cooked in a rich,tangy broth made with tomato, outenga(elephant ear), and lemon. ",
       origin: "ORIGIN :  Kaziranga",
       price: "APPROX COST : Rs.250",
       dish: "RESRTAURANT : Anand Restaurants(kaziranga)",
       image: "../assets/img/exp3.2.jpeg",
      },
      {
       rname: "Khaar",
       location: "DESCRIPTION :When it comes to main food of Assam, Khaar is a non vegetarian dish that comes on top. This meat delicacy is made from the main ingredient khaar on which it is named and also has raw papaya, pulses, and taro.",
       origin: "ORIGIN :  kaziranga",
       price: "APPROX COST : Rs.50/piece",
       dish: "RESRTAURANT : Ahdoos Restaurant( Kaziranga)",
       image: "../assets/img/exp3.3.jpeg",
      },
      {
       rname: " Duck Meat Curry",
       location: "DESCRIPTION :  Another one of Assam’s special food items, duck meat is a dish generally reserved for special occasions. If cooked properly, the dish can blow you away thanks to the use of whole spices.",
       origin: "ORIGIN :guwahati",
       price: "APPROX COST : Rs.210",
       dish: "RESRTAURANT : dabeli Dhaba(guwahati)",
       image: "../assets/img/exp3.4.jpeg",
      },
      {
       rname: "Aloo Pitika",
       location: "DESCRIPTION : This is the Assamese version of mashed potatoes and is an excellent side dish for lunch and dinner.  ",
       origin: "ORIGIN : Kaziranga",
       price: "APPROX COST : Rs.20",
       dish: "RESRTAURANT : Saffron Soul(Kaziranga)",
       image: "../assets/img/exp3.5.jpeg",
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


    let address = document.createElement("h5");
    address.innerText = i.location;
    container.appendChild(address);

    let origin = document.createElement("h5");
    origin.innerText = i.origin;
    container.appendChild(origin);

    let price = document.createElement("h5");
    price.innerText = i.price;
    container.appendChild(price);

    let dish = document.createElement("h5");
    dish.innerText = i.dish;
    container.appendChild(dish);



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

