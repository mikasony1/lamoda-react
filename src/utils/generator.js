import Chance from "chance";

export default function generateProducts(count = 15) {
  const chance = new Chance();
  return chance.unique(
    () => ({
      id: chance.guid(),
      name: chance.pickone([
        "Кроссовки",
        "Туфли",
        "Сапоги",
        "Мокасины",
        "Ботинки",
      ]),
      description: chance.sentence({
        words: chance.integer({ min: 10, max: 15 }),
      }),
      color: chance.pickone([
        "Черный",
        "Красный",
        "Белый",
        "Синий",
        "Бежевый",
        "Коричневый",
      ]),
      category: "Кроссовки",
      price: chance.integer({ min: 10, max: 200 }),
      rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
      imgUrl: chance.pickone([
        "./images/pic1.png",
        "./images/pic2.png",
        "./images/pic3.png",
        "./images/pic4.png",
        "./images/pic5.png",
        "./images/pic6.png",
        "./images/pic7.png",
        "./images/pic8.png",
      ]),
    }),
    count
  );
}
