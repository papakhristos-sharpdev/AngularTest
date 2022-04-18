import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealInfoComponent } from './meal-info/meal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MealListComponent,
    MealInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
	{ path: '', component: MealListComponent },
	{ path: 'meals/:mealId', component: MealInfoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
