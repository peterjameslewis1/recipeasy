export type Recipe = {
  id: string;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  sourceName: string;
  sourceUrl: string;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  analyzedInstructions: [
    {
      name: string;
      steps: {
        number: number;
        step: string;
      }[];
    }
  ];
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: [];
  glutenFree: boolean;
  instructions: string;
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  dishTypes: string[];
  extendedIngredients: {
    aisle: string;
    amount: number;
    consitency: string;
    id: number;
    image: string;
    measures: {
      metric: {
        amount: number;
        unitLong: string;
        unitShort: string;
      };
      us: {
        amount: number;
        unitLong: string;
        unitShort: string;
      };
    };
    meta: [];
    name: string;
    original: string;
    originalName: string;
    unit: string;
  }[];
  summary: string;
  winePairing: {pairedWines: string[]; pairingText: string};
};
