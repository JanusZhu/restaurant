function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const text1 = createP("Best bistro in the area");
  const text2 = createP("Made with heart since 2018");
  const text3 = createP("Chef David Chang");
  const img = createImg("chef", "chef");
  const text4 = createP(
    "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now - save room for dessert!"
  );
  text4.classList.add("home-desc");
  content.append(text1, text2, img, text3, text4);
}

function createP(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div;
}

function createImg(name, className = "img") {
  const img = document.createElement("img");
  img.src = "../dist/img/" + name + ".jpg";
  img.classList.add(className);
  return img;
}

export default loadHome;
