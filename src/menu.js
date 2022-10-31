function loadMenu() {
  console.log("loading menu");
  const content = document.getElementById("content");
  content.innerHTML = "";
  const foods = [
    createFood(
      "Pasta with Asparagus",
      "$40",
      "Making a cream out of the stalks means that every moutful of pasta will have a delicious taste of asparagus"
    ),
    createFood(
      "Baked Spaetzle with Green Pesto",
      "$40",
      "Delicious pasta with a homemade Green Pesto"
    ),

    createFood(
      "Pasta with Radicchio",
      "$40",
      "Add whatever ingredients you want"
    ),

    createFood(
      "Creamy Lemon Pasta",
      "$60",
      "This astonishingly delicious pasta dish of two lemons, heavy cream, salt and pepper in a saucepan"
    ),
  ];

  foods.forEach((food) => {
    content.appendChild(food);
  });
}

function createFood(name, price, description) {
  const food = document.createElement("div");
  food.classList.add("food");
  const foodName = createP(name, "name");
  const foodPrice = createP(price, "price");
  const foodDescription = createP(description, "description");
  food.append(foodName, foodPrice, foodDescription);
  return food;
}

function createP(text, className) {
  const div = document.createElement("div");
  div.textContent = text;
  div.classList.add(className);
  return div;
}

export default loadMenu;
