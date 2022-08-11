const level_1 = document.getElementById("level-1");

level_1.addEventListener("mouseover", function() {
      level_1.innerHTML += " What the hell are you doing !! You skiped me!!! ";
      level_1.style.border = "1px solid red";
      level_1.style.backgroundColor = "blue";
      level_1.style.color="white";
})