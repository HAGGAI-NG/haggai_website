
const otherNavElement = document.getElementById("otherNav");

const otherNavList = document.getElementById("otherNavList");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate 10% of the screen height
  const fortyPercentOfScreen = 0.4 * window.innerHeight;

  // Toggle the fixed class based on the scroll position
  if (scrollPosition > fortyPercentOfScreen) {
    otherNavElement.classList.remove("absolute");
    otherNavElement.classList.add(
      "fixed",
      "bg-gradient-to-r",
      "from-[#ffffff]",
      "to-[#F5F6F8]",
      "!py-4",
      "opacity-100"
    );
    if (window.innerWidth < 768) {
      otherNavList.classList.add("bg-white");
    }
  } else {
    otherNavElement.classList.add("absolute");
    otherNavElement.classList.remove(
      "fixed",
      "bg-gradient-to-r",
      "from-[#ffffff]",
      "to-[#F5F6F8]",
      "!py-4",
      "opacity-100"
    );
    if (window.innerWidth < 768) {
      otherNavList.classList.remove("bg-white");
    }
  }
});
