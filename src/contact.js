function loadContact() {
  console.log("loading contact");
  const content = document.getElementById("content");
  content.innerHTML = "";
  const tel = createP("Tel: 123 456 7890");
  const address = createP("Address: 123 Captain Alley Austin TX 11290");
  const map = document.createElement("img");
  map.classList.add("map");
  map.src = "../dist/img/map.jpg";
  content.append(tel, address, map);
}

function createP(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div;
}
export default loadContact;
