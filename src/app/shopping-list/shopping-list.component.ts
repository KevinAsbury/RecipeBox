import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Bun', 1),
    new Ingredient('Hot Dog', 1),
    new Ingredient('Tomato', 5),
    new Ingredient('Onion', 1),
    new Ingredient('Ground Beef', 2)
  ];

  constructor() { }

  ngOnInit() { }

}
