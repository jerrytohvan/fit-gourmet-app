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

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/foods/japan/okinawa-diet.jpg"),
  require("../assets/images/foods/japan/miso-and-soba-noodle-soup-with-roasted-tofu-and-royalty-free-image-515742222-1551714797.jpg"),
  require("../assets/images/foods/japan/chicken-and-vegetable-katsu.jpg"),
  require("../assets/images/foods/japan/japanese-pancake-FFGF-RCP-600x450.jpg"),
  require("../assets/images/foods/japan/shrimp-fritters-f2.jpg"),
  require("../assets/images/foods/japan/Asian-salmon-700-1.jpg")
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

export { categories, explore, products, profile,recipes};
