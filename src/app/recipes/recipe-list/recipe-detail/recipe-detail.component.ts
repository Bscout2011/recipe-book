import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          this.id = +params.get('id')!
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  addIngredientsToList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
