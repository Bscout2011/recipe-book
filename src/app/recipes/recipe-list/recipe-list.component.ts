import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    {
      name: "Cake",
      description: "A delicious, sweet cake.",
      imagePath: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
    },
    {
      name: "Another Cake",
      description: "More sweet, delicious cake.",
      imagePath: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
    }
  ]

  // selectedRecipe: Recipe;
  @Output() listSelectEvent = new EventEmitter<Recipe>();

  onSelect(recipe: Recipe) {
    // this.selectedRecipe = recipe;
    this.listSelectEvent.emit(recipe);
    console.log("Recipe List new selection:", recipe);
  }
}
