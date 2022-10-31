import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

init();

function init() {
  loadNav();
  loadHome();
  loadFooter();
}

function loadNav() {
  const header = document.createElement("div");
  header.className = "header";
  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = "Bistro Captain";
  const navbar = document.createElement("div");
  navbar.className = "navbar";
  const homeBtn = creatBtn("Home");
  homeBtn.addEventListener("click", (e) => {
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    loadHome();
  });
  const menuBtn = creatBtn("Menu");
  menuBtn.addEventListener("click", (e) => {
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    loadMenu();
  });
  const contactBtn = creatBtn("Contact");
  contactBtn.addEventListener("click", (e) => {
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    loadContact();
  });
  navbar.append(homeBtn, menuBtn, contactBtn);
  header.appendChild(title);
  header.appendChild(navbar);
  const content = document.getElementById("content");
  const body = document.querySelector("body");
  body.insertBefore(header, content);
}

function creatBtn(text) {
  const navBtn = document.createElement("btn");
  navBtn.textContent = text;
  return navBtn;
}

function loadFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Copyrights© JanusZhu |";
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = "Source Code";
  footer.appendChild(link);
  const content = document.getElementById("content");
  content.after(footer);
}
