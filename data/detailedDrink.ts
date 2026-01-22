import { Drink } from "../interfaces/Drink";
import { DrinkDetail } from "../interfaces/Drink";

export const detailedDrinks: DrinkDetail[] = [
  {
    id: "1",
    image: require("../assets/images/CaffeMochaImage.png"),
    knownName: "Caffe Mocha",
    name: "Deep Foam",
    description: "A delicious blend of espresso, steamed milk, and chocolate syrup, topped with whipped cream.",
    price: 4.53,
  },    
  {
    id: "2",
    image: require("../assets/images/FlatWhiteImage.png"),
    knownName: "Flat White",
    name: "Espresso",
    description: "A smooth and velvety coffee made with ristretto shots and steamed milk, creating a rich flavor.",
    price: 3.53,
  },
  {
    id: "3",
    image: require("../assets/images/CaffePanna.png"),
    knownName: "Mocha Fusi",
    name: "Ice/Hot",
    description: "A delightful fusion of espresso, chocolate, and cream, served either hot or iced for a refreshing treat.",
    price: 7.53,
  },
  {
    id: "4",
    image: require("../assets/images/MochaFusi.png"),
    knownName: "Caffe Panna",
    name: "Ice/Hot",
    description: "A classic Italian coffee topped with a generous dollop of whipped cream, perfect for any time of day.",
    price: 5.53,
  }
];

