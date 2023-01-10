import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    // manage shopping-list of ingredients
    private ingredients: Ingredient[] = [
        {
            name: "flour",
            amount: 5
        },
        {
            name: "sugar",
            amount: 9
        }
    ];

    getShoppingList(): Ingredient[] {
        return this.ingredients.slice();  // returns a copy of the ingredients list
    }

    addIngredient(newIngredient: Ingredient): void {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
        console.log("Added new ingredient");
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
        console.log("Added ingredients!");
    }
}