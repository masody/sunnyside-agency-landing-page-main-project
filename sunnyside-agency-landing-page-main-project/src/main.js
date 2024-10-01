const showMenuButton = document.querySelector(".button-menu");
const menuList = document.querySelector(".mobile-menu");

showMenuButton.addEventListener("click", (c) => {
  menuList.classList.add("show-menu");
  c.stopPropagation();
});

document.addEventListener("click", (c) => {
  if (!menuList.contains(c.target)) {
    menuList.classList.remove("show-menu");
  }
});
