let foodToSearch = null;

const YOUR_APP_ID = "f39c24c4";
const YOUR_APP_KEY = "0a066b9a3ba3678795fc901c8521f442";

const requestUrl = `https://api.edamam.com/search?q=kale&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

console.log(requestUrl);



function handleRecipeClick() {
  foodToSearch = document.querySelector("#food-input").value;


  fetchRecipe(foodToSearch);
}

function handleFoodChange() {}

  findRecipes(foodToSearch).then((data) => {
    console.log(data);
    let recipes = data.hits;
    let results = document.getElementById("results");
    let resultsFound = document.getElementById("resultsFound");
    resultsFound.innerHTML = data.count;
    results.innerHTML = "";
    console.log(results);
    for (let i = 0; i < 10; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      let image = document.createElement("img");
      a.href = recipes[i].recipe.url;
      image.src = recipes[i].recipe.image;
      a.text = recipes[i].recipe.label;
      // a.appendChild(image)
      li.appendChild(a);
      li.appendChild(image);
      results.appendChild(li);
    }
  });
  

async function findRecipes(ingredient) {
  const request = await fetch(
    `https://api.edamam.com/search?q=${ingredient}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  );
  let data = await request.json();
  return data;
}

//   recipeLabel.href = data.hits[0].recipe.url;
// recipeLabel.innerHTML = data.hits[0].recipe.url



// async function fetchRecipe(food) {
//   foodToSearch = document.querySelector("#food-input").value;
//   const request = await fetch(
//     `https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
//   );
//   const data = await request.json();
//   console.log(data);
//   let recipeLabel = document.querySelector("#recipe-link");

//   for (let i = 0; i < 10; i++) {
//     recipeLabel.href = data.hits[i].recipe.url;
//     recipeLabel.innerHTML = data.hits[i].recipe.label;
//   }
// }