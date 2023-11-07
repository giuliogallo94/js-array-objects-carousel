const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


 let play = true;
let reverse = false;
let reversePlay = "";


//Stampa delle immagini sul DOM
const itemsElem = document.querySelector(".items");
let imagesString = "";
images.forEach((curImages) => {
  let item = curImages.image;
  let titleImage = curImages.title;
  let textImage = curImages.text;
  imagesString += `
<div class="item">
<img src="${item}" alt="">
<div class="description">
<h6>${titleImage}</h6>
<p>${textImage}</p>
</div>
</div>`;
});

console.log(imagesString);

itemsElem.innerHTML = itemsElem.innerHTML + imagesString;

// Stampa delle thumbnails sul DOM
const miniElem = document.querySelector(".thumbnails");
console.log(miniElem);
let thumbnailsString = "";
images.forEach((curImages) => {
  let thumbnails = curImages.image;
  thumbnailsString += `
    <div class="thumbnails-item">
        <img src="${thumbnails}" alt="">
    </div>`;
});
console.log(thumbnailsString);

miniElem.innerHTML += thumbnailsString;

// EVENTS
let currentIndex = 0;
const slideElems = document.querySelectorAll(".item");
slideElems[currentIndex].classList.add("active");

// Autoplay

let autoPlay = setInterval(function () {
  if (currentIndex < 4) {
    slideElems[currentIndex].classList.remove("active");
    currentIndex++;
    slideElems[currentIndex].classList.add("active");
  } else if (currentIndex == 4) {
    slideElems[currentIndex].classList.remove("active");
    currentIndex = 0;

    slideElems[currentIndex].classList.add("active");
  }
}, 2000);


// Click start-stop button 

let startStopBtn = document.querySelector(".start-stop");
startStopBtn.addEventListener("click", function() {
  
  if(play == true || reverse == true) {
  clearInterval(autoPlay);
  clearInterval(reversePlay);
    play = false;
    console.log(play);
  }
    else if (play == false || reverse == true) {
      clearInterval(reversePlay); 
    let autoPlay = setInterval(function () {
      if (currentIndex < 4) {
        slideElems[currentIndex].classList.remove("active");
        currentIndex++;
        slideElems[currentIndex].classList.add("active");
      } else if (currentIndex == 4) {
        slideElems[currentIndex].classList.remove("active");
        currentIndex = 0;
      
        slideElems[currentIndex].classList.add("active");
      }
    }, 2000);
   }
})




// Click reverse button 
let reverseBtn = document.querySelector(".reverse");
reverseBtn.addEventListener("click", function() {
  let reversePlay = setInterval(function () {
    clearInterval(autoPlay);
    play = false;
    if (currentIndex > 0) {
      slideElems[currentIndex].classList.remove("active");
      currentIndex--;
      slideElems[currentIndex].classList.add("active");
    } else if (currentIndex === 0) {
      
      slideElems[currentIndex].classList.remove("active");
      currentIndex = 4;
      slideElems[currentIndex].classList.add("active");
    }
    reverse = true;
  }
, 2000)
})


// Evento al click delle frecce
document.querySelector(".next").addEventListener("click", function () {
  slideElems[currentIndex].classList.remove("active");
  if (currentIndex < slideElems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  slideElems[currentIndex].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", function () {
  slideElems[currentIndex].classList.remove("active");
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slideElems.length - 1;
  }
  slideElems[currentIndex].classList.add("active");
});

// Evento al click delle thumbnails

let thumbnailsElem = document.querySelectorAll(".thumbnails-item");

for (let i = 0; i < thumbnailsElem.length; i++) {
  curThumb = thumbnailsElem[i];
  console.log(curThumb);
  curThumb.addEventListener("click", () => {
    slideElems[currentIndex].classList.remove("active");
    currentIndex = i;
    console.log(curThumb);
    slideElems[currentIndex].classList.add("active");
  })
}


