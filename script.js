// Hide loader
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 3200);
});


// Floating Hearts

const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="🤍";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(Math.random()*20+15)+"px";

    heart.style.animationDuration=(Math.random()*4+6)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,350);
const startDate = new Date("July 18, 2026 00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    if(diff < 0) return;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
}

updateCounter();

setInterval(updateCounter,60000);
