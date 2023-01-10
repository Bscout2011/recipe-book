import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            "Cake",
            "A delicious, sweet cake.",
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
            [
                new Ingredient('flour', 2),
                new Ingredient('sugar', 5),
                new Ingredient('egg', 1)
            ]
        ),
        new Recipe(
            "Burrito",
            "Flavorful, spicy burrito.",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/640px-Burrito.JPG",
            [
                new Ingredient("chicken", 4),
                new Ingredient("tortilla", 1)
            ]
        )
    ]

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();  // returns a copy of the recipes array
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}