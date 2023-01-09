import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addIngredientEvent = new EventEmitter<Ingredient>();
  
  add() {
    if(this.nameInputRef.nativeElement.value === '' 
      || this.amountInputRef.nativeElement.value === '')
        return;

    this.addIngredientEvent.emit(new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value));
  }

  delete() {

  }

  clear() {

  }
}
