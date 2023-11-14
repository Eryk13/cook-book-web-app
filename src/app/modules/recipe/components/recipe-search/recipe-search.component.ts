import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],
})
export class RecipeSearchComponent {
  @Output() search = new EventEmitter<string>();
  str: string = '';

  onSearch() {
    this.search.emit(this.str.trim());
  }
}
