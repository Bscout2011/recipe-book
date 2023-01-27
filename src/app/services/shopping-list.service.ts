import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
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

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    addIngredient(newIngredient: Ingredient): void {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
        console.log("Added ingredients!");
    }
}