// let foodToSearch = null;

// const YOUR_APP_ID = "f39c24c4";
// const YOUR_APP_KEY = "0a066b9a3ba3678795fc901c8521f442";
// const requestUrl = `https://api.edamam.com/search?q=kale&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
// console.log(requestUrl);

// function handleRecipeClick() {
//   fetchRecipe(foodToSearch);
// }

// async function fetchRecipe(food) {
//   const request = await fetch(
//     `https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
//   );
//   let data = await request.json();
//   return data;
// }

// function handleRecipeClick() {
//   foodToSearch = document.querySelector("#food-input").value;

//   fetchRecipe(foodToSearch).then((data) => {
//     let hits = data.hits;
//     console.log(hits);
//     let results = document.getElementById("results"); // ul created
//     results.innerHTML = ""; // clear it
//     let resultsFound = document.getElementById("resultsFound"); // span created to list result count
//     resultsFound.innerHTML = data.count;

//     for (let i = 0; i < 10; i++) {
//       // main div added to body
//       const cardDiv = document.createElement("div");
//       cardDiv.classList.add("flex-card-div");
//       document.body.appendChild(cardDiv);

//       const li = document.createElement("li");
//       const anchorText = document.createElement("a");
//       anchorText.id = "recipe-link";
//       anchorText.href = hits[i].recipe.url;
//       anchorText.text = hits[i].recipe.label;

//       const image = document.createElement("img");
//       image.classList.add("recipe-image");
//       image.src = hits[i].recipe.image;

//       li.appendChild(anchorText);
//       li.appendChild(image);
//       results.appendChild(li); // results is the UL created

//       // // child div for image
//       const imageDiv = document.createElement("div");
//       imageDiv.classList.add("flex-list-items");
//       imageDiv.appendChild(results);
//       cardDiv.appendChild(imageDiv);
//     }
//   });
// }

// // const infoDiv = document.createElement("div");
// // infoDiv.classList.add("food-info-span");
// // const calorie_span = document.createElement("span");
// // calorie_span.classList.add("food-info-span");
// // calorie_span.innerHTML = hits[i].recipe.calorie_span;
// // infoDiv.appendChild(calorie_span);
// // cardDiv.appendChild(infoDiv);

// // <div class="flex-card-div">
// //     <div class="flex-list-items">
// //       <ul id="results">
// //         <a href="#" id="recipe-link"></a>
// //         <img class="recipe-image" src="" alt="" />
// //       </ul>
// //     </div>
// //     <div class="food-info">
// //       <span class="food-info-span"></span>
// //     </div>
// // let image = document.createElement("img").classList.add("recipe-image");
// //let anchorText = (document.createElement("a").id = "recipe-link");

// // const newDiv = document.createElement("div");
// // div.classList.add("food-info");

// // function handleRecipeClick() {
// //   foodToSearch = document.querySelector("#food-input").value;

// //   fetchRecipe(foodToSearch).then((data) => {
// //     let hits = data.hits;
// //     console.log(hits);
// //     let results = document.getElementById("results"); // ul created
// //     results.innerHTML = ""; // clear it
// //     let resultsFound = document.getElementById("resultsFound"); // span created to list result count
// //     resultsFound.innerHTML = data.count;

// //     for (let i = 0; i < 10; i++) {
// //       const li = document.createElement("li");

// //       const anchorText = document.createElement("a");
// //       anchorText.id = "recipe-link";
// //       anchorText.href = hits[i].recipe.url;
// //       anchorText.text = hits[i].recipe.label;

// //       const image = document.createElement("img");
// //       image.classList.add("recipe-image");
// //       image.src = hits[i].recipe.image;

// //       li.appendChild(anchorText);
// //       li.appendChild(image);

// //       ////

// //       const newDiv = document.createElement("div");
// //       newDiv.classList.add("food-info");

// //       document.body.appendChild(newDiv);
// //       results.appendChild(li); // results is the UL created
// //     }
// //   });

// let image = document.createElement("img").classList.add("recipe-image");
//let anchorText = (document.createElement("a").id = "recipe-link");

// const newDiv = document.createElement("div");
// div.classList.add("food-info");

// function handleRecipeClick() {
//   foodToSearch = document.querySelector("#food-input").value;

//   fetchRecipe(foodToSearch).then((data) => {
//     let hits = data.hits;
//     console.log(hits);
//     let results = document.getElementById("results"); // ul created
//     results.innerHTML = ""; // clear it
//     let resultsFound = document.getElementById("resultsFound"); // span created to list result count
//     resultsFound.innerHTML = data.count;

//     for (let i = 0; i < 10; i++) {
//       const li = document.createElement("li");

//       const anchorText = document.createElement("a");
//       anchorText.id = "recipe-link";
//       anchorText.href = hits[i].recipe.url;
//       anchorText.text = hits[i].recipe.label;

//       const image = document.createElement("img");
//       image.classList.add("recipe-image");
//       image.src = hits[i].recipe.image;

//       li.appendChild(anchorText);
//       li.appendChild(image);

//       ////

//       const newDiv = document.createElement("div");
//       newDiv.classList.add("food-info");

//       document.body.appendChild(newDiv);
//       results.appendChild(li); // results is the UL created
//     }
//   });
