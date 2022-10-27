function loadHome() {
  const content = document.getElementById("content");
  const description = createP(
    "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save roomfor dessert!",
    "description"
  );
  content.appendChild(description);
}

function createP(text, name) {
  const div = document.createElement("div");
  div.textContent = text;
  div.classList.add(name);
  return div;
}

export default loadHome;
