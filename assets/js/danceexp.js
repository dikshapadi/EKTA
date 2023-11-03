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

else if (state == "Gujarat")
{
    dance = {
        data:[
       {
            dname: "Garba",
            desc: "Garba is a traditional Indian dance form that originated in the state of Gujarat. It is known for its vibrant and rhythmic movements, often performed during the Navratri festival, with participants dancing in circles to folk music. The dance celebrates the Hindu goddess Durga and is a symbol of community spirit and unity.",
            image: "../assets/img/garba.jpg",
       },
    ],
};
}

else if (state == "Jammu & Kashmir")
{
    dance = {
        data:[
       {
            dname: "Rouf",
            desc: "Rouf dance is a traditional folk dance from the Kashmir Valley in India. It is characterized by graceful movements and intricate footwork performed by women during festive occasions. The dance reflects the rich cultural heritage of Kashmir and often involves the use of traditional attire and jewelry.",
            image: "../assets/img/rouf.jpg",
       },
    ],
};
}
     

else if (state == "Telangana")
{
    dance = {
        data:[
       {
            dname: "Perini Sivatandavam",
            desc: "Perini Sivatandavam is a traditional dance form from the Indian state of Andhra Pradesh. It is a dynamic and vigorous dance, typically performed by male dancers, depicting the cosmic dance of Lord Shiva. The dance involves intricate footwork, powerful movements, and dramatic expressions, making it a visually captivating art form deeply rooted in Hindu mythology and history.",
            image: "../assets/img/sivatandavam.jpg",
       },
    ],
};
}

else if (state == "Assam")
{
    dance = {
        data:[
       {
            dname: "Bihu",
            desc: "Bihu is a vibrant and energetic folk dance and festival celebrated in the Indian state of Assam. It marks the harvest season and features lively dance performances to the rhythmic beats of traditional Assamese music. Bihu is a cultural celebration that signifies the joy and abundance of the Assamese community, with colorful costumes and traditional rituals.",
            image: "../assets/img/bihu.jpg",
       },
    ],
};
}

for(let i of dance.data){
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


