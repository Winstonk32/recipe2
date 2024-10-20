// Example data for trending recipes
const trendingRecipes = [
  
    {
        id: 1 ,
        name: "chicken curry",
        image: "food/curry.webp",
        ingredients: ["Chicken", "Tomatoes", "Onions", "Garlic", "Curry powder", "Ginger", "Coconut milk"],
        instructions: "Sauté onions, garlic, and ginger. Add chicken and cook until browned. Stir in tomatoes and curry powder. Add coconut milk and simmer until chicken is fully cooked."
      },
      {
        id: 2,
        name: "Nyama Choma",
        image: "food/choma.jpg",
        ingredients: ["Beef or Goat meat", "Salt", "Pepper", "Garlic", "Lemon juice"],
        instructions: "Marinate meat with salt, pepper, garlic, and lemon juice. Grill over an open flame until cooked to your liking."
      },
      {
        id:3,
        name: "Shrimp Scampi with Pasta",
        image: "food/shrimp.webp",
        ingredients: ["Shrimp", "Garlic", "Butter", "White wine", "Lemon juice", "Parsley", "Spaghetti"],
        instructions: "Cook pasta. Sauté garlic in butter, add shrimp, and cook until pink. Stir in white wine and lemon juice. Toss with pasta and garnish with parsley."
      },
      {
        id:4,
        name: "Persian Rice",
        image: "food/rice.jpg",
        ingredients: ["Basmati rice", "Saffron", "Butter", "Salt", "Water"],
        instructions: "Parboil the rice, drain, and steam with saffron and butter for a crispy bottom layer called 'tahdig'. Serve alongside stews or kebabs.",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
    instructions: "Cook pasta. Fry pancetta until crisp. Mix eggs and cheese in a bowl. Toss hot pasta with pancetta and egg mixture. Season with pepper."
      },
      {
        id:5,
        name: "Spaghetti Carbonara",
        image: "food/carbonara.jpg",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
        instructions: "Cook pasta. Fry pancetta until crisp. Mix eggs and cheese in a bowl. Toss hot pasta with pancetta and egg mixture. Season with pepper."
      },
      {
        id:6,
        name: "Paella",
        image: "food/paella.jpg",
        ingredients: ["Rice", "Chicken", "Seafood", "Saffron", "Bell peppers", "Peas", "Tomatoes", "Olive oil"],
        instructions: "Sauté chicken and seafood. Add rice, saffron, and vegetables. Simmer in broth until the rice absorbs the liquid. Garnish with parsley."
      },
      {
        id:7,
        name: "Sushi Rolls",
        image: "food/sushi.jpg",
        ingredients: ["Sushi rice", "Nori (seaweed)", "Fish (salmon or tuna)", "Cucumber", "Avocado", "Soy sauce", "Wasabi"],
        instructions: "Spread sushi rice on nori. Add fish, cucumber, and avocado. Roll tightly, slice, and serve with soy sauce and wasabi."
      },
      {
        id:8,
        name: "Beef Stroganoff",
        image: "food/stroganoff.jpg",
        ingredients: ["Beef", "Onions", "Mushrooms", "Sour cream", "Butter", "Flour", "Beef broth"],
        instructions: "Sauté beef with onions and mushrooms. Stir in flour, then add broth. Simmer and stir in sour cream. Serve over noodles or rice."
      },
      {
        id:9,
        name: "Pad Thai",
        image: "food/padthai.webp",
        ingredients: ["Rice noodles", "Eggs", "Shrimp", "Tofu", "Peanuts", "Bean sprouts", "Tamarind paste", "Fish sauce"],
        instructions: "Soak noodles. Stir-fry tofu and shrimp. Push to the side and scramble eggs. Add noodles and tamarind sauce. Garnish with peanuts and bean sprouts."
      },
      {
        id:10,
        name: "Moussaka",
        image: "food/moussaka.webp",
        ingredients: ["Eggplant", "Potatoes", "Ground lamb", "Tomatoes", "Onion", "Garlic", "Béchamel sauce", "Cheese"],
        instructions: "Layer fried eggplant, cooked potatoes, and ground lamb in a baking dish. Top with béchamel sauce and cheese. Bake until golden brown."
      },
      {
        id:11,
        name: "Tom Yum Soup",
        image: "food/tomyum.webp",
        ingredients: ["Shrimp", "Lemongrass", "Lime leaves", "Galangal", "Chili peppers", "Mushrooms", "Lime juice"],
        instructions: "Boil lemongrass, lime leaves, and galangal in broth. Add shrimp and mushrooms. Season with lime juice and chili peppers."
      },
      {
        id:12,
        name: "Falafel",
        image: "food/falafel.webp",
        ingredients: ["Chickpeas", "Onions", "Garlic", "Parsley", "Cumin", "Coriander", "Flour", "Oil"],
        instructions: "Blend chickpeas with onions, garlic, and spices. Form into balls and deep-fry. Serve in pita bread with vegetables and tahini sauce."
      }
  ];
  
 
// Load trending recipes into page 1
const trendingSection = document.getElementById("trending-recipes");
if (trendingSection) {
  trendingRecipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <button onclick="saveRecipe(${recipe.id})">Save</button>
      <button onclick="viewRecipe(${recipe.id})">View</button>
    `;
    trendingSection.appendChild(card);
  });
}

// Save recipes in localStorage
function saveRecipe(id) {
  let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  const recipe = trendingRecipes.find((r) => r.id === id);
  if (recipe && !savedRecipes.some((r) => r.id === id)) {
    savedRecipes.push(recipe);
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    alert(`${recipe.name} saved to your recipe book!`);
    displaySavedRecipes();  // Update saved recipes after saving
  } else {
    alert("This recipe is already saved!");
  }
}

// Load saved recipes into page 2 and display them
const savedSection = document.getElementById("saved-recipes");

function displaySavedRecipes() {
  if (savedSection) {
    savedSection.innerHTML = '';  // Clear the section before adding new content
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    
    savedRecipes.forEach((recipe, index) => {
      const card = document.createElement("div");
      card.classList.add("recipe-card");

      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
        <button onclick="viewRecipe(${recipe.id})">View</button>
        <button onclick="deleteRecipe(${recipe.id})">Delete</button>
      `;
      savedSection.appendChild(card);
    });
  }
}

// Call displaySavedRecipes when page loads
if (savedSection) {
  displaySavedRecipes();
}

// Delete a saved recipe from localStorage
function deleteRecipe(id) {
  let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== id); // Remove the recipe by id
  localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
  alert("Recipe removed from your book!");
  displaySavedRecipes();  // Update displayed saved recipes after deletion
}

// View recipe details on page 3
function viewRecipe(id) {
  const recipe = trendingRecipes.find((r) => r.id === id) || 
                 JSON.parse(localStorage.getItem("savedRecipes")).find((r) => r.id === id);
  if (recipe) {
    localStorage.setItem("currentRecipe", JSON.stringify(recipe));
    window.location.href = "recipe.html";
  }
}

// Display recipe details on recipe.html
const recipeTitle = document.getElementById("recipe-title");
const ingredientsList = document.getElementById("ingredients-list");
const instructions = document.getElementById("instructions");


if (recipeTitle && ingredientsList && instructions) {
  const recipe = JSON.parse(localStorage.getItem("currentRecipe"));
  if (recipe) {
    recipeTitle.textContent = recipe.name;
    recipe.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });
    instructions.textContent = recipe.instructions;
  }
}