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


const recipes = [
    {
      id: 1,
      user: {
        name: 'Gordon Ramsay',
        avatar: 'https://yt3.ggpht.com/a/AGF-l7_6r_NR0iZWw6Tm_eDIiYy35mIUoPqKPUCfgw=s900-c-k-c0xffffffff-no-rj-mo',
      },
      saved: true,
      location: 'Western, Pescetarian',
      temperature: 34,
      title: 'Grilled Salmon with Garlic Mushroom and Lentil Salad',
      description: 'This is the best grilled salmon recipe! The marinade makes the fish so flavorful and it’s ridiculously easy to make! It’s going to become your go-to salmon recipe!',
      rating: 4.6,
      reviews: 231,
      preview: 'https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-GRILLED-SALMON-WITH-GARLIC-MUSHROOM-AND-LENTIL-SALAD.png',
      images: [
        'https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-GRILLED-SALMON-WITH-GARLIC-MUSHROOM-AND-LENTIL-SALAD.png',
  
      ]
    },
    {
    id: 2,
    user: {
      name: 'Jamie Oliver',
      avatar: 'https://food.konbini.com/files/2016/07/jo2-1-810x810.jpg',
    },
    saved: true,
    location: 'Italian, Pescetarian',
    temperature: 34,
    title: 'Seafood risotto',
    description: 'Perfect for the weekend, this amazing risotto will blow everyone away. Slow-roasting the tomatoes transforms them into incredibly sweet, vibrant bombs of goodness that will explode in your mouth, while the combination of delicate seafood is a real treat. An utterly decadent dish, but totally worth it.',
    rating: 4.3,
    reviews: 12,
    preview: 'https://thesauce.atbbq.com/wp-content/uploads/2017/08/cooking-with-fire-seafood-risotto-recipe.jpg',
    images: [
      'https://thesauce.atbbq.com/wp-content/uploads/2017/08/cooking-with-fire-seafood-risotto-recipe.jpg',

    ]
  },
]

export { categories, explore, products, profile, recipes};
