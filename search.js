const searchForm = document.querySelector('searchForm');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('container');
let searchQuery = '';
const APP_ID = '0afafdc7'; //API ID
const APP_key = '160d4b731396746f446124e1a7bbe0af'; //API KEY
const baseURL = `https://api.spoonacular.com/recipes/complexSearch&app_id=${APP_ID}&app_key=${APP_key}&to=20`;  //Path

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI(
{
 "id": 716429,
 "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
 "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
 "imageType": "jpg", 
 "servings": 2,
 "readyInMinutes": 45,
 "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
 "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
 "aggregateLikes": 209,
 "healthScore": 19, 
 "spoonacularScore": 83,
 "glutenFree": false,
 "vegan": false,
 "vegetarian": false,
 "dishTypes": [
  "lunch",
  "main course",
  "main dish",
  "dinner"
 ],
 "extendedIngredients": [
  {
   "aisle": "Milk, Eggs, Other Dairy",
   "amount": 1,
   "consitency": "solid",
   "id": 1001,
   "image": "butter-sliced.jpg",
   "measures": {
    "metric": {
     "amount": 1,
     "unitLong": "Tbsp",
     "unitShort": "Tbsp"
    },
    "us": {
     "amount": 1,
     "unitLong": "Tbsp",
     "unitShort": "Tbsp"
    }
   },
   "meta": [],
   "name": "butter",
   "original": "1 tbsp butter",
   "originalName": "butter",
   "unit": "tbsp"
  },
  {
   "aisle": "Produce",
   "amount": 2,
   "consitency": "solid",
   "id": 10011135,
   "image": "cauliflower.jpg",
   "measures": {
    "metric": {
     "amount": 473.176,
     "unitLong": "milliliters",
     "unitShort": "ml"
    },
    "us": {
     "amount": 2,
     "unitLong": "cups",
     "unitShort": "cups"
    }
   },
   "meta": [
    "frozen",
    "thawed",
    "cut into bite-sized pieces"
   ],
   "name": "cauliflower florets",
   "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
   "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
   "unit": "cups"
  },
  {
   "aisle": "Cheese",
   "amount": 2,
   "consitency": "solid",
   "id": 1041009,
   "image": "cheddar-cheese.png",
   "measures": {
    "metric": {
     "amount": 2,
     "unitLong": "Tbsps",
     "unitShort": "Tbsps"
    },
    "us": {
     "amount": 2,
     "unitLong": "Tbsps",
     "unitShort": "Tbsps"
    }
   },
   "meta": [
    "grated",
    "(I used romano)"
   ],
   "name": "cheese",
   "original": "2 tbsp grated cheese (I used romano)",
   "originalName": "grated cheese (I used romano)",
   "unit": "tbsp"
  },
  {
   "aisle": "Oil, Vinegar, Salad Dressing",
   "amount": 1,
   "consitency": "liquid",
   "id": 1034053,
   "image": "olive-oil.jpg",
   "measures": {
    "metric": {
     "amount": 1,
     "unitLong": "Tbsp",
     "unitShort": "Tbsp"
    },
    "us": {
     "amount": 1,
     "unitLong": "Tbsp",
     "unitShort": "Tbsp"
    }
   },
   "meta": [],
   "name": "extra virgin olive oil",
   "original": "1-2 tbsp extra virgin olive oil",
   "originalName": "extra virgin olive oil",
   "unit": "tbsp"
  },
  {
   "aisle": "Produce",
   "amount": 5,
   "consitency": "solid",
   "id": 11215,
   "image": "garlic.jpg",
   "measures": {
    "metric": {
     "amount": 5,
     "unitLong": "cloves",
     "unitShort": "cloves"
    },
    "us": {
     "amount": 5,
     "unitLong": "cloves",
     "unitShort": "cloves"
    }
   },
   "meta": [],
   "name": "garlic",
   "original": "5-6 cloves garlic",
   "originalName": "garlic",
   "unit": "cloves"
  },
  {
   "aisle": "Pasta and Rice",
   "amount": 6,
   "consitency": "solid",
   "id": 20420,
   "image": "fusilli.jpg",
   "measures": {
    "metric": {
     "amount": 170.097,
     "unitLong": "grams",
     "unitShort": "g"
    },
    "us": {
     "amount": 6,
     "unitLong": "ounces",
     "unitShort": "oz"
    }
   },
   "meta": [
    "(I used linguine)"
   ],
   "name": "pasta",
   "original": "6-8 ounces pasta (I used linguine)",
   "originalName": "pasta (I used linguine)",
   "unit": "ounces"
  },
  {
   "aisle": "Spices and Seasonings",
   "amount": 2,
   "consitency": "solid",
   "id": 1032009,
   "image": "red-pepper-flakes.jpg",
   "measures": {
    "metric": {
     "amount": 2,
     "unitLong": "pinches",
     "unitShort": "pinches"
    },
    "us": {
     "amount": 2,
     "unitLong": "pinches",
     "unitShort": "pinches"
    }
   },
   "meta": [
    "red"
   ],
   "name": "red pepper flakes",
   "original": "couple of pinches red pepper flakes, optional",
   "originalName": "couple of red pepper flakes, optional",
   "unit": "pinches"
  },
  {
   "aisle": "Spices and Seasonings",
   "amount": 2,
   "consitency": "solid",
   "id": 1102047,
   "image": "salt-and-pepper.jpg",
   "measures": {
    "metric": {
     "amount": 2,
     "unitLong": "servings",
     "unitShort": "servings"
    },
    "us": {
     "amount": 2,
     "unitLong": "servings",
     "unitShort": "servings"
    }
   },
   "meta": [
    "to taste"
   ],
   "name": "salt and pepper",
   "original": "salt and pepper, to taste",
   "originalName": "salt and pepper, to taste",
   "unit": "servings"
  },
  {
   "aisle": "Produce",
   "amount": 3,
   "consitency": "solid",
   "id": 11291,
   "image": "spring-onions.jpg",
   "measures": {
    "metric": {
     "amount": 3,
     "unitLong": "",
     "unitShort": ""
    },
    "us": {
     "amount": 3,
     "unitLong": "",
     "unitShort": ""
    }
   },
   "meta": [
    "white",
    "green",
    "separated",
    "chopped"
   ],
   "name": "scallions",
   "original": "3 scallions, chopped, white and green parts separated",
   "originalName": "scallions, chopped, white and green parts separated",
   "unit": ""
  },
  {
   "aisle": "Alcoholic Beverages",
   "amount": 2,
   "consitency": "liquid",
   "id": 14106,
   "image": "white-wine.jpg",
   "measures": {
    "metric": {
     "amount": 2,
     "unitLong": "Tbsps",
     "unitShort": "Tbsps"
    },
    "us": {
     "amount": 2,
     "unitLong": "Tbsps",
     "unitShort": "Tbsps"
    }
   },
   "meta": [
    "white"
   ],
   "name": "white wine",
   "original": "2-3 tbsp white wine",
   "originalName": "white wine",
   "unit": "tbsp"
  },
  {
   "aisle": "Pasta and Rice",
   "amount": 0.25,
   "consitency": "solid",
   "id": 99025,
   "image": "breadcrumbs.jpg",
   "measures": {
    "metric": {
     "amount": 59.147,
     "unitLong": "milliliters",
     "unitShort": "ml"
    },
    "us": {
     "amount": 0.25,
     "unitLong": "cups",
     "unitShort": "cups"
    }
   },
   "meta": [
    "whole wheat",
    "(I used panko)"
   ],
   "name": "whole wheat bread crumbs",
   "original": "1/4 cup whole wheat bread crumbs (I used panko)",
   "originalName": "whole wheat bread crumbs (I used panko)",
   "unit": "cup"
  }
 ],
 "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.",
 "winePairing": {
  "pairedWines": [
   "chardonnay",
   "gruener veltliner",
   "sauvignon blanc"
  ],
  "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
  "productMatches": [
   {
    "id": 469199,
    "title": "Buddha Kat Winery Chardonnay",
    "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
    "price": "$25.0",
    "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
    "averageRating": 0.8,
    "ratingCount": 1,
    "score": 0.55,
    "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20"
   }
  ]
 }
}
    );
});


async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;  //Path
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results){
    const generateHTML = '';
    results.map(result =>{
        generateHTML +=
        `
        <div class="item">
            <img src="${}results.recipe.image" alt="">
                <div class="flex-container">
                    <h1 class="title">${result.recipe.title}</h1>
                    <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
                </div>
                <p class="item-data">Likes: ${results.recipe.aggregateLikes}</p>
                <p class="item-data">Servings: ${results.recipe.servings}</p>
                <p class="item-data">Minutes: ${results.recipe.readyInMinutes}</p>
                <p class="item-data">Calories: ${results.recipe.calories.toFixed(2)}</p>
    </div>
        `
    })
}