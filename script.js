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
