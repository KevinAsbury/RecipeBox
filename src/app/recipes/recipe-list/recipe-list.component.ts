import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Bro Dogs', 'Dogs bruh', 'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg'),
    new Recipe('Bro Burgs', 'Burgs bruh', 'https://media-cdn.tripadvisor.com/media/photo-s/11/66/3d/41/img-20171117-wa0002-largejpg.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
