import { Drink } from "../interfaces/Drink";
import { DrinkDetail } from "../interfaces/Drink";

export const detailedDrinks: DrinkDetail[] = [
  {
    id: "1",
    image: require("../assets/images/CaffeMochaImage.png"),
    knownName: "Caffe Mocha",
    name: "Deep Foam",
    description: "A delicious blend of espresso, steamed milk, and chocolate syrup, topped with whipped cream.This is just to make the text seem large mehn just skip this part you know.",
    price: 4.53,
    rating: "4.8(230)",

  },    
  {
    id: "2",
    image: require("../assets/images/FlatWhiteImage.png"),
    knownName: "Flat White",
    name: "Espresso",
    description: "A smooth and velvety coffee made with ristretto shots and steamed milk, creating a rich flavor.This is just to make the text seem large mehn just skip this part you know.",
    price: 3.53,
    rating: "4.6(150)",
  },
  {
    id: "3",
    image: require("../assets/images/CaffePanna.png"),
    knownName: "Mocha Fusi",
    name: "Ice/Hot",
    description: "A delightful fusion of espresso, chocolate, and cream, served either hot or iced for a refreshing treat.This is just to make the text seem large mehn just skip this part you know.",
    price: 7.53,
    rating: "4.9(320)",
  },
  {
    id: "4",
    image: require("../assets/images/MochaFusi.png"),
    knownName: "Caffe Panna",
    name: "Ice/Hot",
    description: "A classic Italian coffee topped with a generous dollop of whipped cream, perfect for any time of day.This is just to make the text seem large mehn just skip this part you know.",
    price: 5.53,
    rating: "4.7(210)",
  }
];

