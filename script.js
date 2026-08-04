document.getElementById("surpriseBtn").addEventListener("click", () => {

    // Confetti 🎉
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    // Create full-screen message
    const surprise = document.createElement("div");

    surprise.style.position = "fixed";
    surprise.style.top = "0";
    surprise.style.left = "0";
    surprise.style.width = "100%";
    surprise.style.height = "100%";
    surprise.style.background = "rgba(5,8,22,0.96)";
    surprise.style.display = "flex";
    surprise.style.flexDirection = "column";
    surprise.style.justifyContent = "center";
    surprise.style.alignItems = "center";
    surprise.style.textAlign = "center";
    surprise.style.padding = "30px";
    surprise.style.zIndex = "99999";

    surprise.innerHTML = `
        <h1 style="font-family:'Great Vibes',cursive;font-size:70px;color:#ffd6e7;">
            I Love You ❤️
        </h1>

        <p style="max-width:700px;font-size:24px;line-height:2;color:white;">
            Out of everyone in this world...<br><br>

            I'm so grateful that life led me to you.<br><br>

            Thank you for making me laugh,
            for making me feel loved,
            and for being the person I look forward to every day.<br><br>

            If this little website made you smile,
            then it has already done its job. 🤍<br><br>

            You'll always have a very special place in my heart.<br><br>

            <b>Forever yours,<br>Sushicado ❤️</b>
        </p>

        <button id="closeFinal"
        style="
        margin-top:30px;
        padding:15px 35px;
        border:none;
        border-radius:40px;
        background:#ff5c9d;
        color:white;
        font-size:18px;
        cursor:pointer;">
        ❤️ One More Hug
        </button>
    `;

    document.body.appendChild(surprise);

    document.getElementById("closeFinal").onclick = () => {
        surprise.remove();
    };

});
