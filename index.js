const getMealBtn = document.getElementById("get_meal");
const mealContainer = document.getElementById("meal");

// EventListener:
getMealBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});
function createMeal(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  // console.log(ingredients);

  mealContainer.innerHTML = `
  <div class="meal--wrapper">
    <aside class="meal--info">
        <div class="img--wrapper">
            <div>
              <img class="img" src="${meal.strMealThumb}"/>
              <h3>Meal Type: ${meal.strCategory}</h3>
              <p>Origin: ${meal.strArea}
              <p>Tags: ${meal.strTags.split(",").join(", ")}</p>
            </div>
            <div class="meal--desc">
              <h1>Title: ${meal.strMeal}</h1>
              <p class="desc">Description: ${meal.strInstructions}</p>
            </div>
        </div>
        <div class="ing--video">
            <h5>Ingredient</h5>
            <ul>
            ${ingredients
              .map((ingredient) => `<li>${ingredient}</li>)`)
              .join("")}
            </ul>
        </div>
     </aside>
            <div class="video">
              <h4>Video Recipe</h4>
              <iframe width="460" height="215" src="https://youtube.com/embed/${meal.strYoutube.slice(
                -11
              )}" /> 
            </div>
  </div>`;
}
//Function
