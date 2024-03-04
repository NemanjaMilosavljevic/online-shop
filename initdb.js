const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Cevap",
    image: "/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    description: "opis neki  asdsa dasdasas das daasasd asas adasd a",
    price: 100,
    category: "main dish",
    subcategory: "barbeque",
    vegan: 0,
    fasting: 0,
  },
  {
    title: "Pomfrit",
    image: "/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    description: "Pomfrit ",
    price: 50,
    category: "prilog",
    subcategory: "",
    vegan: 0,
    fasting: 0,
  },
  {
    title: "Pizza",
    image: "/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    description: "Pomfrit ",
    price: 27,
    category: "main dish",
    subcategory: "pizza",
    vegan: 1,
    fasting: 1,
  },
  {
    title: "Pasta",
    image: "/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    description: "Pasta ",
    price: 68,
    category: "main dish",
    subcategory: "pasta",
    vegan: 1,
    fasting: 0,
  },
  {
    title: "Desert",
    image: "/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    description: "Desert ",
    price: 123,
    category: "dessert",
    subcategory: "",
    vegan: 0,
    fasting: 0,
  },
  {
    title: "Salad",
    image: "/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    description: "Salad ",
    price: 56,
    category: "salad",
    subcategory: "",
    vegan: 1,
    fasting: 1,
  },
  {
    title: "Jaje",
    image: "/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    description: "Jaje ",
    price: 56,
    category: "breakfast",
    subcategory: "",
    vegan: 1,
    fasting: 1,
  },
];

db.prepare(
  `CREATE TABLE IF NOT EXISTS meals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  price INTEGER,
  category TEXT NOT NULL,
  subcategory TEXT NOT NULL,
  vegan INTEGER,
  fasting INTEGER
)`
).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO meals VALUES (
      null,
      @title,
      @image,
      @description,
      @price,
      @category,
      @subcategory,
      @vegan,
      @fasting
    )
    `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
