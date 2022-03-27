console.log("Netflix : Cloned by Harshit Lakshakar");

let thumbnail = Array.from(document.querySelectorAll(".thumbnails div"));
let synopsisToggle = Array.from(
  document.querySelectorAll(".synopsis.jumbotron")
);
let close = Array.from(document.querySelectorAll(".synopsis .title img"));

document.querySelector(".description button").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup img").addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("active");
  vid.pause();
});

for (let i = 0; i < thumbnail.length; i++) {
  let x = i;
  thumbnail[x].addEventListener("click", () => {
    if (synopsisToggle[x].classList.contains("active")) {
      synopsisToggle[x].classList.remove("active");
    } else {
      for (let j = 0; j < thumbnail.length; j++) {
        let y = j;
        synopsisToggle[y].classList.remove("active");
      }
      synopsisToggle[x].classList.add("active");
    }
  });
}

for (let k = 0; k < thumbnail.length; k++) {
  let x = k;
  close[x].addEventListener("click", () => {
    synopsisToggle[x].classList.remove("active");
  });
}
