// ============================
// ELEMENTS
// ============================

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");
const letterSection = document.getElementById("letterSection");
const reasonsSection = document.getElementById("reasonsSection");
const ending = document.querySelector(".ending");
const letterText = document.getElementById("letterText");
const reasonBtn = document.getElementById("reasonBtn");
const reasonBox = document.getElementById("reasonBox");
const wishBox = document.getElementById("wishBox");

// ============================
// HERO TYPEWRITER
// ============================

const intro = "Someone made this little universe... just for you. 🤍";

let introIndex = 0;

function typeIntro(){

    if(introIndex < intro.length){

        typing.innerHTML += intro.charAt(introIndex);

        introIndex++;

        setTimeout(typeIntro,55);

    }

}

typeIntro();

// ============================
// LOVE LETTER
// ============================

const letter = `Hi Baby ❤️

Before you read anything else...

I just wanted to say thank you.

Thank you for walking into my life.

Thank you for making me smile when I least expect it.

Your smile somehow became my favourite thing in the world.

You make ordinary days feel beautiful.

You make my heart feel safe.

I know this website isn't perfect...

but every line here was written with love.

I hope whenever life becomes difficult,

you remember there is always someone cheering for you.

Someone who's proud of you.

Someone who loves you.

That someone is me.

I love you so much.

Forever,

Your Sushicado 🤍`;

startBtn.addEventListener("click",()=>{

letterSection.style.display="flex";

reasonsSection.style.display="flex";

ending.style.display="flex";

startBtn.style.display="none";

letterSection.scrollIntoView({

behavior:"smooth"

});

letterText.innerHTML="";

let i=0;

function write(){

if(i<letter.length){

letterText.innerHTML+=letter.charAt(i);

i++;

setTimeout(write,35);

}

}

write();

});

// ============================
// REASONS
// ============================

const reasons=[

"Because your smile is my favourite view ❤️",

"Because you're my safe place.",

"Because you're my peace.",

"Because you're the cutest human ever.",

"Because talking to you makes my day better.",

"Because I can be completely myself with you.",

"Because you're my favourite notification 📱",

"Because your hugs feel like home.",

"Because you're one in eight billion.",

"Because I simply love you."

];

reasonBtn.addEventListener("click",()=>{

const random=Math.floor(Math.random()*reasons.length);

reasonBox.innerHTML=reasons[random];

});
