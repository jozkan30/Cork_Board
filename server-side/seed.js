import connection from "./connection.js";
import Review from "./models/Wine_model.js";
import User from "./models/User.js";
import bcrypt from "bcrypt";

const reviews = [
  {
    winery: "Ravel & Stitch",
    grapes: "Cabernet Sauvignon",
    vintage: 2019,
    region: "California",
    country: "USA",
    description: "Delicous wine",
    rating: 3,
    image:
      "https://www.winetransit.com/media/catalog/product/cache/400a650acef16caf799ce948294c4e36/r/a/ravel_stitch_cab_19_750.jpg",
    comments: [
      {
        user: "Wine Enthusiast",
        content:
          "This wine has such a complex and layered flavor profile. I'm loving every sip!",
      },
    ],
  },

  {
    winery: "Silver Oak",
    grapes: "Napa Valley Cabernet Sauvignon",
    vintage: 2016,
    region: "Napa Valley",
    country: "USA",
    description: "Full-bodied and complex",
    rating: 4,
    image:
      "https://www.silveroak.com/images/wines/large/silver_oak_napa_valley_2016.jpg",
    comments: [
      {
        user: "Wine Enthusiast",
        content:
          "This wine has such a complex and layered flavor profile. I'm loving every sip!",
      },
    ],
  },
  {
    winery: "Château Margaux",
    grapes: "Cabernet Sauvignon",
    vintage: 2015,
    region: "Bordeaux",
    country: "France",
    description: "Elegant and refined",
    rating: 5,
    image: "https://www.chateau-margaux.com/assets/images/2015-3e847a26d1.jpg",
    comments: [
      {
        user: "Wine Novice",
        content:
          "I never used to be into wine, but this one has definitely changed my mind. So delicious!",
      },
    ],
  },

  {
    winery: "Opus One",
    grapes: "Cabernet Sauvignon",
    vintage: 2017,
    region: "Napa Valley",
    country: "USA",
    description: "Bold and structured",
    rating: 4,
    image:
      "https://www.opusonewinery.com/wp-content/uploads/2019/09/OPUS17-2018_Productshot_300dpi.jpg",
    comments: [
      {
        user: "Wine Connoisseur",
        content:
          "As someone who has tried countless wines, I can confidently say that this is one of the best I've ever had. Simply exquisite.",
      },
    ],
  },

  {
    winery: "Penfolds",
    grapes: "Shiraz",
    vintage: 2016,
    region: "Barossa Valley",
    country: "Australia",
    description: "Rich and spicy",
    rating: 4,
    image:
      "https://www.penfolds.com/-/media/images/penfolds/hero-images/2021-04/21-00258-11a-penfolds-grange-2016-750ml.png",
    comments: [
      {
        user: "Wine Lover",
        content:
          "This wine is perfect for a cozy night in. It's so smooth and comforting.",
      },
    ],
  },

  {
    winery: "Chateau Ste. Michelle",
    grapes: "Chardonnay",
    vintage: 2018,
    region: "Columbia Valley",
    country: "USA",
    description: "Crisp and refreshing",
    rating: 3,
    image:
      "https://www.ste-michelle.com/~/media/images/wines/hero/2018-chardonnay_1.png",
    comments: [
      {
        user: "Wine Critic",
        content:
          "I'm impressed by the balance of flavors in this wine. It's clear that a lot of care went into crafting it.",
      },
      {
        user: "Wine Collector",
        content:
          "I'm adding this bottle to my collection for sure. It's too good to pass up!",
      },
    ],
  },

  {
    winery: "Maison Louis Jadot",
    grapes: "Pinot Noir",
    vintage: 2017,
    region: "Burgundy",
    country: "France",
    description: "Smooth and fruity",
    rating: 4,
    image:
      "https://www.louisjadot.com/wp-content/uploads/2019/12/MACON-VILLAGES-2017.png",
  },

  {
    winery: "Beringer",
    grapes: "Merlot",
    vintage: 2016,
    region: "Napa Valley",
    country: "USA",
    description: "Velvety and rich",
    rating: 3,
    image:
      "https://www.beringer.com/on/demandware.static/-/Sites-Beringer-Library/default/dw9fbf9c2d/images/product/Beringer-Merlot-2016.png",
    comments: [
      {
        user: "Wine Pairing Expert",
        content:
          "This wine pairs so well with the dish I'm having. It really brings out the flavors in both the food and the wine.",
      },
    ],
  },

  {
    winery: "Torres",
    grapes: "Cabernet Sauvignon",
    vintage: 2016,
    region: "Penedès",
    country: "Spain",
    description: "Fruit-forward and vibrant",
    rating: 4,
    image: "https://www.torres.es/sites/default/files/styles/960x960",
    comments: [
      {
        user: "Wine Tasting Pro",
        content:
          "I'm picking up notes of black cherry, vanilla, and oak in this wine. It's truly a work of art.",
      },
    ],
  },
];

const insertData = async () => {
  await connection.dropDatabase();
  await Review.create(reviews);
  const user1 = new User({
    username: "justin",
    email: "someone@gmail.com",
    password: await bcrypt.hash("1234", 11),
  });
  await user1.save();
  console.log("Created users");

  await connection.close();
};

insertData();
