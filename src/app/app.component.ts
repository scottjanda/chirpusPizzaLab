import { Component } from '@angular/core';
import { MenuItem } from './menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  menu: MenuItem[] = [
    {
      Name: "Chciken Fingers",
      Category: "Dinner",
      Price: 11.99
    },
    {
      Name: "Pizza",
      Category: "Dinner",
      Price: 11.99
    },
    {
      Name: "Wings",
      Category: "Sides",
      Price: 8.99
    },
    {
      Name: "Breadsticks",
      Category: "Sides",
      Price: 4.99
    },
    {
      Name: "Ceasar Salad",
      Category: "Salads",
      Price: 5.99
    },
    {
      Name: "Cinnamon Roll",
      Category: "Dessert",
      Price: 8.99
    },
  ]

  getByCategory(Cat: String): MenuItem[] {
    return this.menu.filter(x => x.Category == Cat)
  }

  getUniqueCategories(): string[] {
    const uniqueCategories = this.menu.filter(
      (thing, i, arr) => arr.findIndex(t => t.Category === thing.Category) === i
    )

    let categoriesList: string[] = [];

    uniqueCategories.forEach(element => {
      categoriesList.push(element.Category)
    });

    return categoriesList;
  }

}
;
