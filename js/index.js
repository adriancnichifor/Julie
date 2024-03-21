const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav_link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

//Hero animation
const typewriter = document.querySelector(".typewriter");
const text =
  "Solor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto, aperiam magni ipsum corporis neque, nihil molestias dolorem fugiat culpa nesciunt, nobis similique ipsam exercitationem aliquam quae est delectus deleniti.";
function textTypeEffect(element, text) {
  let i = 0;
  let interval = setInterval(() => {
    if (i < text.length) {
      element.textContent = element.textContent.slice(0, -1);
      element.textContent += text[i];
      element.textContent += "|";
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        element.textContent = element.textContent.slice(0, -1);

        const button = document.querySelector(".read_more_btn");
        const sl = document.querySelector(".social-list_container");

        button.style.transition = "opacity 0.5s ease-in"; // Specifică o tranziție pentru opacitate
        button.style.opacity = "1";
        sl.style.transition = "opacity 2s ease-in";
        sl.style.opacity = "1";
        setTimeout(() => {
          const videobg = document.querySelector(".hero_video-bg");
          videobg.play();
        }, 3000); //video delay start
      }, 250); //delete underscore
    }
  }, 15); // writing speed
}

textTypeEffect(typewriter, text);
