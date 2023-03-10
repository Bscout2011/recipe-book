import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    // Typescript supports constructor initialization!
    constructor(
        public name: string,
        public description: string,
        public imagePath: string,
        public ingredients: Ingredient[]) {}
}