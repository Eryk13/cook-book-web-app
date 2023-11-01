import { Ingredient } from './ingredient';

export interface Recipe {
  id?: number;
  title: string;
  ingredients: Ingredient[];
  instructions: string[];
}
