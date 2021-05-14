let foodToSearch = null;

const YOUR_APP_ID = "f39c24c4";
const YOUR_APP_KEY = "0a066b9a3ba3678795fc901c8521f442";
const requestUrl = `https://api.edamam.com/search?q=kale&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

async function fetchRecipe(food) {
  const request = await fetch(
    `https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  );
  let data = await request.json();
  console.log(data);
  return data;
}

function handleRecipeClick() {
  foodToSearch = document.querySelector("#food-input").value;
  fetchRecipe(foodToSearch).then(renderScreen);
}

function renderScreen(data) {
  // creates another function with parameter (data) to run AFTER await fetch is complete on line 13
  let resultsFound = document.getElementById("resultsFound"); // span created to list result count
  resultsFound.innerHTML = data.count;

  let hits = data.hits;
  const recipe_section = document.getElementById("recipe-section");
  recipe_section.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    // main div added to body
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("flex-card-div");
    recipe_section.appendChild(cardDiv);

    //anchor text
    const anchorText = document.createElement("a");
    anchorText.id = "recipe-link";
    anchorText.href = hits[i].recipe.url;
    anchorText.text = hits[i].recipe.label;

    //image
    const image = document.createElement("img");
    image.classList.add("recipe-image");
    image.src = hits[i].recipe.image;

    // calories
    const calorie_span = document.createElement("span");
    calorie_span.classList.add("food-info-span");
    calorie_span.innerHTML = `Calories: ${Math.floor(hits[i].recipe.calories)}`;

    // serving
    const serving_span = document.createElement("span");
    serving_span.classList.add("food-info-span");
    serving_span.innerHTML = `Serves: ${hits[i].recipe.yield}`;
    // time
    const time_span = document.createElement("span");
    time_span.classList.add("food-info-span");
    let cookingTime = hits[i].recipe.totalTime
      ? `${hits[i].recipe.totalTime} mins`
      : "NA";
    time_span.innerHTML = `Total Time: ${cookingTime}`;
    // ingredient list
    const ul = document.createElement("ul");
    ul.classList.add("inredient-list");
    let ingredientLines = hits[i].recipe.ingredientLines;
    for (let i = 0; i < ingredientLines.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = ingredientLines[i];
      ul.appendChild(li);
    }
    // DIV creation and appending
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("flex-list-items");
    imageDiv.appendChild(image);
    imageDiv.appendChild(anchorText);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("food-info-div");
    infoDiv.appendChild(ul);
    infoDiv.appendChild(calorie_span);
    infoDiv.appendChild(serving_span);
    infoDiv.appendChild(time_span);

    cardDiv.appendChild(imageDiv);
    cardDiv.appendChild(infoDiv);
  }
}
