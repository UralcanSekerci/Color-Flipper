const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let intervalId;

btn.addEventListener("click", function () {
  if (intervalId) {
    // Eger interval hali hazırda çalışıyorsa durdurmak için
    clearInterval(intervalId);
    intervalId = null;
    btn.textContent = "Start";
  } else {
    // Eger interval çalışmıyorsa başlatmak için
    intervalId = setInterval(changeBackground, 750);
    btn.textContent = "Stop";
  }
});

color.addEventListener("click", function () {
  const colorValue = color.textContent;

  setTimeout(() => {
    navigator.clipboard.writeText(colorValue)
      .then(() => {
        const messageBox = document.createElement("div");
        messageBox.classList.add("message-box");
        messageBox.textContent = "Copied!";
        color.parentElement.insertBefore(messageBox, color);

        setTimeout(() => {
          messageBox.remove();
        }, 1000);
      })
      .catch((error) => {
        console.error("Clipboard writeText error:", error);
      });
  }, 100);
});


function changeBackground() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

document.body.style.transition = "background-color 0.5s ease";

