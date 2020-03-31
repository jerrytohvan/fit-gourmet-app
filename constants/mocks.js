const categories = [
  {
    id: "japanese",
    name: "Japanese",
    tags: ["all","healthy", "indulge","inspirations"],
    count: 147,
    image: require("../assets/icons/japanese.png")
  },
  {
    id: "fruits",
    name: "Fruits",
    tags: ["all","healthy"],
    count: 16,
    image: require("../assets/icons/fruit.png")
  },
  {
    id: "salads",
    name: "Salads",
    tags: ["all","healthy", "indulge"],
    count: 54,
    image: require("../assets/icons/salad.png")
  },
  {
    id: "noodles",
    name: "Noodles",
    tags: ["all","indulge", "inspirations"],
    count: 17,
    image: require("../assets/icons/noodles.png")
  }
];

//https://www.loveandlemons.com/sesame-soba-noodles/
const products = [
  {
    id: 1,
    name: "Japanese Sesame Soba Noodles",
    instructions:
     "1. Make the dressing: In a small bowl, combine the vinegar, tamari, sesame oil, ginger, garlic, and honey. Set aside. \n2. Bring an unsalted pot of water to a boil and cook the soba noodles according to package directions. Drain and rinse well in cold water. This helps to remove starches that cause clumping. Toss the noodles with the dressing and divide into 2 to 4 bowls. Squeeze fresh lemon juice onto the avocado slices and add to the bowls along with the snap peas, edamame, radish, mint, and sprinkle with sesame seeds. Drizzle with more tamari or sesame oil, if desired.\n\n",
     ingredients:
     "• Sesame Dressing \n• ¼ cup rice vinegar\n• 2 tablespoons tamari, more for serving\n• ½ teaspoon toasted sesame oil\n• 1 teaspoon grated ginger\n• 1 garlic clove, grated\n• ½ teaspoon maple syrup or honey\n\n For the Soba Noodles:\n• 6 ounces soba noodles*, see note\n• Sesame oil, for drizzling\n• 2 avocados, sliced\n• Squeezes of lemon\n• 2 cups blanched snap peas \n• ¼ cup edamame \n• 1 watermelon radish or 2 red radishes, very thinly sliced\n• /4 cup fresh mint leaves \n•  Sesame seeds",
         tags: ["Japanese", "Healthy", "30 minutes"],
    images: [
      require("../assets/images/foods/japan/soba-noodles.jpg"),
      require("../assets/images/foods/japan/recipe-1/1.jpg"),
      require("../assets/images/foods/japan/recipe-1/2.jpg"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/foods/japan/recipe-1/3.jpg"),
      require("../assets/images/foods/japan/recipe-1/4.jpg"),
      require("../assets/images/foods/japan/recipe-1/5.jpg"),
 
    ]
  }
];

const explore = [
  require("../assets/images/foods/japan/soba-noodles.jpg"),
  require("../assets/images/foods/japan/okinawa-diet.png"),
  require("../assets/images/foods/japan/chicken-and-vegetable-katsu.png"),
  require("../assets/images/foods/japan/rsz_ramen.png"),
  require("../assets/images/foods/japan/japanese-pancake-FFGF-RCP-600x450.png"),
  require("../assets/images/foods/japan/shrimp-fritters-f2.png"),
  require("../assets/images/foods/japan/Asian-salmon-700-1.png")
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

const sesame = require('../assets/icons/groceries/sesame.png');
const rice_vinegar = require('../assets/icons/groceries/rice-vinegar.png');
const avocado = require('../assets/icons/groceries/avocado.png');
const lemon = require('../assets/icons/groceries/lemon.png');
const edamame = require('../assets/icons/groceries/edamame.png');
const sesame_snaps = require('../assets/icons/groceries/sesame-snaps.png');
const red_radish = require('../assets/icons/groceries/red-radish.jpg');
const mint = require('../assets/icons/groceries/fresh-mints.jpg');
const tamari = require('../assets/icons/groceries/tamari.png');
const sesame_oil = require('../assets/icons/groceries/sesame-oil.png');
const ginger = require('../assets/icons/groceries/ginger.png');
const garlic = require('../assets/icons/groceries/garlic.png');
const honey = require('../assets/icons/groceries/honey.png');
const soba = require('../assets/icons/groceries/soba.png');


const gordon_ramsay = require('../assets/images/gordon_ramsay.jpg');
const grilled_salmon = require('../assets/images/grilled_salmon.png');
const jamie_oliver = require('../assets/images/jamie_oliver.jpg');
const seafood_rissoto = require('../assets/images/seafood_rissoto.jpg');

const groceries = [
  {
    id: 1,
    image: sesame,
    name: 'Kewpie Roasted Sesame Dressing (210 ml)',
    price: 5.8,
    amountTaken: 1
  }, {
    id: 2,
    image: rice_vinegar,
    name: 'Narcissus Rice Vinegar (600 g)',
    price: 1.35,
    amountTaken: 1
  }, {
    id: 3,
    image: avocado,
    name: 'Prime Asia Avocados (3 per pack)',
    price: 4.95,
    amountTaken: 1
  }, {
    id: 4,
    image: lemon,
    name: 'Citrus Jumbo Yellow Lemons (2 per Pack)',
    price: 1.85,
    amountTaken: 3
  }, {
    id: 5,
    image: edamame,
    name: 'SunnyFarm Edamame (400 g)',
    price: 2.4,
    amountTaken: 1
  }, 
  {
    id: 6,
    image: sesame_snaps,
    name: 'Sesame Snaps (30 g)',
    price: 2.4,
    amountTaken: 2,
  }, 
  {
    id: 7,
    image: red_radish,
    name: 'Red Radish (200 g)',
    price: 3,
    amountTaken: 1
  }, 
  {
    id: 8,
    image: mint,
    name: 'Fresh Mints (50 g)',
    price: 1.5,
    amountTaken: 1
  }, 
  {
    id: 9,
    image: tamari,
    name: 'Simply Natural Organic Tamari Sauce (370 ml)',
    price: 7.5,
    amountTaken: 1
  }, 
  {
    id: 10,
    image: sesame_oil,
    name: 'Double Pagoda 100% Pure Sesame Oil (150 ml)',
    price: 3,
    amountTaken: 1
  }, 
  {
    id: 11,
    image: ginger,
    name: 'GIVVO Old Ginger (200 g)',
    price: 1.9,
    amountTaken: 1
  }, 
  {
    id: 12,
    image: garlic,
    name: 'White Whole Garlic (200 g)',
    price: 1.35,
    amountTaken: 1
  }, 
  {
    id: 13,
    image: honey,
    name: 'Polleney Pure Honey (200 g)',
    price: 2.85,
    amountTaken: 1
  }, 
  {
    id: 14,
    image: soba,
    name: 'Tanabiki Seimen Japanese Soba Noodles (200 g)',
    price: 2.5,
    amountTaken: 1
  }, 
]

const recipes = [
    {
      id: 1,
      user: {
        name: 'Gordon Ramsay',
        avatar: gordon_ramsay,
      },
      saved: true,
      location: 'Western, Pescetarian',
      temperature: 34,
      title: 'Grilled Salmon with Garlic Mushroom and Lentil Salad',
      description: 'This is the best grilled salmon recipe! The marinade makes the fish so flavorful and it’s ridiculously easy to make! It’s going to become your go-to salmon recipe!',
      rating: 4.6,
      reviews: 231,
      preview: grilled_salmon,
      images: [
        grilled_salmon,
      ]
    },
    {
    id: 2,
    user: {
      name: 'Jamie Oliver',
      avatar: jamie_oliver,
    },
    saved: true,
    location: 'Italian, Pescetarian',
    temperature: 34,
    title: 'Seafood risotto',
    description: 'Perfect for the weekend, this amazing risotto will blow everyone away. Slow-roasting the tomatoes transforms them into incredibly sweet, vibrant bombs of goodness that will explode in your mouth, while the combination of delicate seafood is a real treat. An utterly decadent dish, but totally worth it.',
    rating: 4.3,
    reviews: 12,
    preview: seafood_rissoto,
    images: [
      seafood_rissoto,

    ]
  },
]



export { categories, explore, products, profile, recipes, groceries};
