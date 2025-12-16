
const word = document.querySelectorAll(".change-text .word");
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

word.forEach(word => {
    const letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(letter => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

word[currentWordIndex].style.opacity = "1";

function changeWord() {
    const currentWord = words[currentWordIndex];
    const nextWord =
        currentWordIndex === maxWordIndex
            ? words[0]
            : words[currentWordIndex + 1];

    // animate out
    currentWord.querySelectorAll(".letter").forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";

    // animate in
    nextWord.querySelectorAll(".letter").forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

setInterval(changeWord, 3000);




// mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');


// active menu ///////////////////////////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
   let len = section.length;
   while(--len && window.scrollY + 97 < section[len].offsetTop){}
   menuLi.forEach(sec => sec.classList.remove("active"));
   menuLi[len].classList.add("active"); 
}

activeMenu()
window.addEventListener("scroll",activeMenu);


// sticky navbar ///////////////////////////////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})


// toggle icon navbar ///////////////////////////////////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}


