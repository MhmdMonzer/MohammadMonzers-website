// Text Replace
const oldText = document.getElementById("changeText");
const newText = "Mohammad Monzer's";

function eraseText(oldText) {
    let i = oldText.textContent.length;

    const interval = setInterval(() => {
        if (i > 0) {
            oldText.textContent = oldText.textContent.slice(0 , i-1);
            i--;
        } else {
            clearInterval(interval);
        }
    }, 120);
}

function writeText(newText) {
    let i = 0;
    
    const interval = setInterval(() => {
        if (i < newText.length) {
            oldText.textContent = newText.slice(0, i + 1);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 120);
}

function clickHandler() {
    eraseText(oldText);
    setTimeout(() => {
        writeText(newText);
        oldText.removeEventListener("click", clickHandler);
    }, 500);
}

oldText.addEventListener("click", clickHandler);


// information background color
document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".information");
    const windowHeight = window.innerHeight;

    function changeBackgroundColor() {
    const scrollPercentage = (window.scrollY / (content.clientHeight - windowHeight)) * 100;
    const initialHue = 185;
    const hueRange = 120;
    
    const hue = (initialHue + scrollPercentage * (hueRange / 100)) % 360;

    content.style.backgroundColor = `hsl(${hue}, 80%, 65%)`;
    }

    window.addEventListener("scroll", changeBackgroundColor);
});


// Hobbies Script
const hobbiesButton = document.querySelectorAll(".hobbiesnav");
const heading = document.querySelector(".hobbies-info h3");
const paragraph = document.querySelector(".hobbies-info p");
const placeholder = document.querySelector(".placeholder");

const headingText = "Programming";
const paragraphText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.";

const headingText2 = "Art";
const paragraphText2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.";

const headingText3 = "Calisthenics";
const paragraphText3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.";

const headingText4 = "Music";
const paragraphText4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.";

const headingText5 = "Photography & Photo/Vedio Editing";
const paragraphText5 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.";

const headingText6 = "Gaming";
const paragraphText6 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.";

const headingText7 = "Anime & Series";
const paragraphText7 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat harum aperiam maxime cum eligendi ipsa assumenda dolor mollitia praesentium ut dicta amet, recusandae voluptas iusto in atque quos! Repudiandae.";

let autoWriteInterval;

function hobbies_writeText(title, text) {
    let i = 0;

    clearInterval(autoWriteInterval);

    autoWriteInterval = setInterval(() => {
        if (i < text.length) {
            heading.textContent = title.slice(0, i + 1);
            paragraph.textContent = text.slice(0, i + 1);
            i++;
        } else {
            clearInterval(autoWriteInterval);
        }
    }, 25);
}

function handleButtonClick_hobbies(event) {
    const clickedButton = event.target;
    const buttonId = clickedButton.id;

    switch (buttonId) {
        case 'hobby-1':
            hobbies_writeText(headingText, paragraphText);
            break;
        case 'hobby-2':
            hobbies_writeText(headingText2,paragraphText2);
            break;
        case 'hobby-3':
            hobbies_writeText(headingText3,paragraphText3);
            break;
        case 'hobby-4':
            hobbies_writeText(headingText4,paragraphText4);
            break;
        case 'hobby-5':
            hobbies_writeText(headingText5,paragraphText5);
            break;
        case 'hobby-6':
            hobbies_writeText(headingText6,paragraphText6);
            break;
        case 'hobby-7':
            hobbies_writeText(headingText7,paragraphText7);
            break;
    }
}

hobbiesButton.forEach(button => {
    button.addEventListener("click", () => {
        placeholder.style.display = "none";
        handleButtonClick_hobbies(event);
    });
});


// Programming Script
const programmingButton = document.querySelectorAll(".programming-button");
const cards = document.querySelectorAll(".programming-card");

function hideAllCards() {
    cards.forEach(card => {
        card.style.display = "none";
    });
}

function handleButtonClick_programming(event) {
    const clickedButton = event.target;
    const buttonId = clickedButton.id;

    hideAllCards();

    const cardId = `programming-card${buttonId.slice(-1)}`;
    const card = document.getElementById(cardId);
    
    if (card) {
        card.style.display = "block";
        card.style.animation = "slide 0.3s ease alternate";
    }
}

programmingButton.forEach(button => {
    button.addEventListener("click", handleButtonClick_programming);
});


// footer text color
const footerText = document.querySelector(".footer-text h2");
var color = null;

setInterval(() => {
    footerText.style.color = `hsl(${color},100%,70%)`;
    color += 0.1;
}, 0.1);
