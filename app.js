const colors = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen"
];

let previousColorIndex;

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
  let randomNumber = getRandomNumber();

  // eger sayi oncekiyle ayniysa tekrar bir number generate etmek için
  while (randomNumber === previousColorIndex) {
    randomNumber = getRandomNumber();
  }

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

  previousColorIndex = randomNumber;


}





function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}


document.body.style.transition = "background-color 0.5s ease";