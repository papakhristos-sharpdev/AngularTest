import { Component, OnInit } from '@angular/core';

import { meals } from '../meals';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  meals = meals;

  constructor() { }

  ngOnInit() {
  }

}
