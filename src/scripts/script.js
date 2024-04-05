const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

console.log(window.innerWidth);

// Get the navigation element
const homeNavElement = document.getElementById("homeNav");

// Nav UL Element
const homeNavList = document.getElementById("homeNavList");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate 10% of the screen height
  const fortyPercentOfScreen = 0.4 * window.innerHeight;

  // Toggle the fixed class based on the scroll position
  if (scrollPosition > fortyPercentOfScreen) {
    homeNavElement.classList.remove("absolute");

    homeNavElement.classList.add(
      "fixed",
      "bg-gradient-to-r",
      "from-[#05182F]",
      "to-[#000913]",
      "py-4",
      "opacity-100"
    );

    if (window.innerWidth < 768) {
      // homeNavList.classList.add(
      // );
      // otherNavList.classList.add("bg-white");
    }
  } else {
    homeNavElement.classList.add("absolute");
    homeNavElement.classList.remove(
      "fixed",
      "bg-gradient-to-r",
      "from-[#05182F]",
      "to-[#000913]",
      "py-4"
    );

    if (window.innerWidth < 768) {
      // homeNavList.classList.remove(
      //   "bg-gradient-to-r",
      //   "from-[#05182F]",
      //   "to-[#000913]"
      // );
    }
  }
});

const scrollToOkayShallWeButton = document.getElementById(
  "scrollToOkayShallWeButton"
);

scrollToOkayShallWeButton.addEventListener("click", () => {
  console.log("Here");
  let target = document.getElementById("scrollToOkayShallWeButton");
  const yOffset = 200;
  const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
});
