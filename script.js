const display = document.getElementById("container");

setInterval(() => {
  for (let i = 0; i < 2; i++) {
    const snowFlake = document.createElement("i");
    snowFlake.classList.add("fas");
    snowFlake.classList.add("fa-snowflake");
    snowFlake.style.left = Math.random() * window.innerWidth + "px";
    snowFlake.style.opacity = 0.3 + Math.random();
    snowFlake.style.fontSize = 7 + Math.random() * 10 + "px";

    display.appendChild(snowFlake);
    snowFlake.addEventListener("animationend", () => {
      snowFlake.remove();
    });
  }
}, 25);
