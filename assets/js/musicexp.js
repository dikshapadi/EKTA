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
        dname: "Carnatic Music",
        desc: "Carnatic music is usually performed by a small ensemble of musicians, consisting of a principal performer (usually a vocalist), a melodic accompaniment (usually a violin), a rhythm accompaniment (usually a mridangam), and a tambura, which acts as a drone throughout the performance.",
        image: "../assets/img/Yakshagana-2.jpg",
   },
],
};
}

else if (state == "Gujarat")
{
    dance = {
        data:[
       {
            dname: "Sugam Sangeet",
            desc: "Gujarati folk music, known as Sugam Sangeet, is a hereditary profession of the Barot, Gadhvi and Charan communities. The omnipresent instruments in Gujarati folk music include wind instruments, such as turi, bungal, and pava, string instruments. The ravan hattho, ektaro, and jantar and percussion instruments, such as the manjira and zanz pot drum.",
            image: "../assets/img/garba.jpg",
       },
    ],
};
}

else if (state == "Jammu and Kashmir")
{
    dance = {
        data:[
       {
            dname: "Chakri",
            desc: "Chakri is one of the most popular types of traditional music played in Jammu & Kashmir. Chakri is a responsorial song form with instrumental parts, and it is played with instruments like the harmonium, the rubab, the sarangi, the nout, the geger, the tumbaknaer and the chimta. It is performed in folk and religious spheres, by the Muslim and Hindu kashmiris.",
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
            image: "../assets/img/sivatandavam.png",
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

    let name = document.createElement("p");
    name.classList.add("dname");
    name.innerText = i.dname.toUpperCase();
    container.appendChild(name);

    let desc = document.createElement("p");
    // name.classList.add("d1name");
    desc.innerText = i.desc;
    container.appendChild(desc);

    card.appendChild(container);
    document.getElementById("dance").appendChild(card);
}


