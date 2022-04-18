import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { meals } from '../meals';

@Component({
  selector: 'app-meal-info',
  templateUrl: './meal-info.component.html',
  styleUrls: ['./meal-info.component.css']
})
export class MealInfoComponent implements OnInit {

  constructor(
	private route: ActivatedRoute
) { }

  ngOnInit() {
	this.route.paramMap.subscribe(params => {
//		this.meal = meals[+params.get('mealId')];
		var s = +params.get('mealId');
	});
  }

}
