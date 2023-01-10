import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) {}

  add() {
    if(this.nameInputRef.nativeElement.value === '' 
      || this.amountInputRef.nativeElement.value === '')
        return;

    this.shoppingListService.addIngredient(new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value));
  }

  delete() {

  }

  clear() {

  }
}
