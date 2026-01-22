import { Drink } from "../interfaces/Drink";

export const drinks: Drink[] = [
  {
    id: "1",
    image: require("../assets/images/CaffeMochaImage.png"),
    knownName: "Caffe Mocha",
    name: "Deep Foam",
    price: 4.53,
  },
  {
    id: "2",
    image: require("../assets/images/FlatWhiteImage.png"),
    knownName: "Flat White",
    name: "Espresso",
    price: 3.53,
  },
  {
    id: "3",
    image: require("../assets/images/CaffePanna.png"),
    knownName: "Mocha Fusi",
    name: "Ice/Hot",
    price: 7.53,
  },
  {
    id: "4",
    image: require("../assets/images/MochaFusi.png"),
    knownName: "Caffe Panna",
    name: "Ice/Hot",
    price: 5.53,
  }
];
