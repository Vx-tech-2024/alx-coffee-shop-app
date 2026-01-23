export interface Drink {
  id: string;
  image: any; // require() images in React Native
  knownName: string;
  name: string;
  price: number;
}

export interface DrinkDetail extends Drink {
  description: string;
  rating: string;
  
}