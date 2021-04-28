const userInput = document.getElementById("user-input");
const nameButton = document.getElementById("name-button");
const userName = document.getElementById("user-name");

nameButton.addEventListener('click', () => {

    userName.textContent = userInput.value;
});


const userPronounInput = document.getElementById("user-pronoun-input");
const pronounButton = document.getElementById("pronoun-button");
const userPronouns = document.getElementById("user-pronouns");

pronounButton.addEventListener('click', () => {
    userPronouns.textContent = userPronounInput.value;
} );


const fontChangeButton = document.getElementById("font-change-button");
const helloFont = documnet.getElementById("hello-font");
helloFont.style.fontFamily= "fantasy";

fontChangeBUtton.addEventListener('click', () => {
    helloFont.textContent = helloFont.style.fontFamily;
});
