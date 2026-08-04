// ============================
// TYPEWRITER
// ============================

const message = `Hi Chubbs ❤️

If you're reading this...

that means you clicked on something made just for you.

I know this isn't the biggest gift in the world...

but every line here was made with you in mind.

Thank you for walking into my life.

Thank you for making me laugh.

Thank you for making ordinary days feel special.

Your smile somehow became my favorite thing to see.

And little by little...

you became one of my favorite people.

I hope whenever life gets difficult...

you remember there's someone who believes in you,

cheers for you,

and loves you so, so much.

I love you, Baby. 🤍

Forever,

Your Sushicado ❤️`;

let index = 0;
const typing = document.getElementById("typing");
const letter = document.getElementById("letterText");

function typeWriter(){

if(index < message.length){

typing.innerHTML += message.charAt(index);

letter.innerHTML += message.charAt(index);

index++;

setTimeout(typeWriter,45);

}

}

typeWriter();


// ============================
// LOVE TIMER
// ============================

const startDate = new Date("2026-07-18T00:00:00");

function updateTimer(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor((diff/(1000*60*60))%24);

const minutes = Math.floor((diff/(1000*60))%60);

const seconds = Math.floor((diff/1000)%60);

document.getElementById("loveTimer").innerHTML =
`${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}

updateTimer();

setInterval(updateTimer,1000);


// ============================
// REASONS
// ============================

const reasons=[

"Because your smile melts my heart. ❤️",

"Because you always make my day better.",

"Because you're my comfort person.",

"Because you're incredibly handsome. 😌",

"Because I smile whenever your name pops up.",

"Because you believe in me.",

"Because you make me laugh.",

"Because talking to you feels like home.",

"Because you're the cutest person ever.",

"Because you're my favorite notification. 📱❤️",

"Because you're my peace.",

"Because you're simply... you."

];

function showReason(){

const random=Math.floor(Math.random()*reasons.length);

document.getElementById("reasonBox").innerHTML=reasons[random];

}


// ============================
// SECRET HEART
// ============================

const secretHeart=document.getElementById("secretHeart");

const secretMessage=document.getElementById("secretMessage");

secretHeart.onclick=()=>{

secretMessage.style.display="block";

confetti({

particleCount:200,

spread:180,

origin:{y:0.6}

});

};

function closeSecret(){

secretMessage.style.display="none";

}
// ============================
// FLOATING HEARTS
// ============================

const heartsContainer = document.getElementById("hearts");

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = ["❤️","🤍","💖","💕","💗"][Math.floor(Math.random()*5)];

heart.style.left = Math.random()*100 + "vw";

heart.style.fontSize = (15 + Math.random()*25) + "px";

heart.style.animationDuration = (6 + Math.random()*5) + "s";

heartsContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},11000);

}

setInterval(createHeart,450);


// ============================
// SHOOTING STARS
// ============================

const shootingContainer = document.getElementById("shooting-stars");

function shootingStar(){

const star = document.createElement("div");

star.className = "shooting-star";

star.style.left = (60 + Math.random()*40) + "vw";

star.style.top = Math.random()*35 + "vh";

shootingContainer.appendChild(star);

setTimeout(()=>{
star.remove();
},3000);

}

setInterval(shootingStar,5000);


// ============================
// HEARTS ON CLICK
// ============================

document.addEventListener("click",(e)=>{

for(let i=0;i<8;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize=(14+Math.random()*18)+"px";

heart.style.transition="all 1.5s ease";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
`translate(${(Math.random()-0.5)*180}px,-${120+Math.random()*120}px)
scale(0)`;

heart.style.opacity="0";

},20);

setTimeout(()=>{
heart.remove();
},1600);

}

});


// ============================
// CONFETTI BUTTON
// ============================

document.getElementById("confettiBtn").addEventListener("click",()=>{

confetti({

particleCount:300,

spread:180,

startVelocity:45,

origin:{y:.6}

});

setTimeout(()=>{

alert("I love you so much, Chubbs ❤️\n\nForever yours,\nSushi 🤍");

},600);

});


// ============================
// EXTRA CONFETTI ON LOAD
// ============================

window.addEventListener("load",()=>{

setTimeout(()=>{

confetti({

particleCount:180,

spread:160,

origin:{y:.55}

});

},1200);

});


// ============================
// STAR GENERATOR
// ============================

const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

const dot=document.createElement("div");

dot.style.position="absolute";

dot.style.width=(1+Math.random()*3)+"px";

dot.style.height=dot.style.width;

dot.style.borderRadius="50%";

dot.style.background="white";

dot.style.left=Math.random()*100+"vw";

dot.style.top=Math.random()*100+"vh";

dot.style.opacity=Math.random();

dot.style.animation=`twinkle ${2+Math.random()*4}s infinite`;

stars.appendChild(dot);

}


// ============================
// TWINKLE ANIMATION
// ============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%{opacity:.2;}

50%{opacity:1;}

100%{opacity:.2;}

}

`;

document.head.appendChild(style);
