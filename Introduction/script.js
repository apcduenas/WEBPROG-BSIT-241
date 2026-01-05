const motivateBtn = document.getElementById("motivateBtn");

motivateBtn.addEventListener("click", function () {
    // 1. Existing Alert
    alert("Keep pushing forward and never give up on your dreams!");

    // 2. New Visual Effect: Flash the screen fiery yellow/red
    document.body.style.transition = "0.2s";
    document.body.style.backgroundColor = "#ff6a00";
    
    setTimeout(() => {
        document.body.style.backgroundColor = "#121212"; // Fade back to charcoal
    }, 300);

    // 3. Log a "Ghost Rider" message to the console
    console.log("%c THE SPIRIT OF VENGEANCE IS WITH YOU!", "color: orange; font-weight: bold; font-size: 20px;");
});

// Extra: Randomly flicker the headers like a flame
setInterval(() => {
    const headers = document.querySelectorAll('h2');
    const randomHeader = headers[Math.floor(Math.random() * headers.length)];
    randomHeader.style.textShadow = Math.random() > 0.5 ? "0 0 10px #ffcc00" : "0 0 2px #e62117";
}, 500);