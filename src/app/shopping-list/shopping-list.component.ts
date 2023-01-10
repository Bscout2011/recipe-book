import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    console.log("shopping-list component ngOnInit()");
    this.ingredients = this.shoppingListService.getShoppingList();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        console.log("Shopping-list getting ingredients");
        this.ingredients = ingredients;
      }
    )
  }
}
