export interface review {
  review: string;
  name: string;
}

export interface product {
  review: string;
  name: string;
  image: string;
}

export const review: review[] = [
  {
    review:
      "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    name: "John Matthews",
  },
  {
    review:
      "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    name: "Eunice Oliver",
  },
  {
    review: "It’s a really good product and helps me sleep better at night!",
    name: "Laura Davies",
  },
  {
    review:
      "Helps me relax and remember to breathe. Stress level definitely goes down",
    name: "Jane Bocks",
  },
];

export const products: product[] = [
  {
    review:
      "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    name: "Rachel Dill",
    image: "/firstProduct.svg",
  },
  {
    review:
      "It really helps me fall right to sleep compared to melatonin pills.",
    name: "Javier Mendez",
    image: "/secondProduct.svg",
  },
  {
    review:
      "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
    name: "Naomi Nwazurike",
    image: "/secondProduct.svg",
  },
  {
    review: "I have been falling asleep faster and sleeping thru the night.",
    name: "Nate Jacobs",
    image: "/firstProduct.svg",
  },
];
