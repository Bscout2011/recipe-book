import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  addIngredientsToList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
