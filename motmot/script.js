
// Falling flower petals
const petalsContainer = document.getElementById("petals");

const petalSymbols = ["✿", "❀", "♡", "✧"];

function createPetal() {
    const petal = document.createElement("span");

    petal.classList.add("petal");

    petal.textContent =
        petalSymbols[
            Math.floor(Math.random() * petalSymbols.length)
        ];

    // Random horizontal position
    petal.style.left = Math.random() * 100 + "vw";

    // Random size
    petal.style.fontSize =
        Math.random() * 15 + 12 + "px";

    // Random falling speed
    const duration = Math.random() * 6 + 7;

    petal.style.animationDuration = duration + "s";

    petalsContainer.appendChild(petal);

    // Remove petals after animation
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Create petals continuously
setInterval(createPetal, 500);

// Add extra petals when the page opens
for (let i = 0; i < 15; i++) {
    setTimeout(createPetal, i * 250);
}


// Surprise button
const loveButton = document.getElementById("loveButton");
const surprise = document.getElementById("surprise");

loveButton.addEventListener("click", function () {
    surprise.classList.toggle("show");

    if (surprise.classList.contains("show")) {
        loveButton.textContent = "Sending you love ♡";
    } else {
        loveButton.textContent = "Click for a little surprise ♡";
    }
});
