import { useState } from "react";

export default function ProductFilter({ onAdd, onDelete }) {
  const [colors, setColors] = useState([]);
  const [price, setPrice] = useState({ min: null, max: null });

  const handleChangeSearch = (e) => {
    const searchText = e.target.value.trim();
    if (searchText) {
      onAdd({
        name: "search",
        fn: (product) => {
          return (
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
            product.description.toLowerCase().includes(searchText.toLowerCase())
          );
        },
      });
    } else {
      onDelete("search");
    }
  };

  const handleChangeColor = (e) => {
    let newColors;
    if (e.target.checked) {
      newColors = [...colors, e.target.name];
      setColors(newColors);
    } else {
      newColors = colors.filter((color) => color !== e.target.name);
      setColors(newColors);
    }

    if (newColors.length > 0) {
      onAdd({
        name: "color",
        fn: (product) => {
          return newColors.includes(product.color);
        },
      });
    } else {
      onDelete("color");
    }
  };

  const handleChangePrice = (e) => {
    const value = e.target.value ? Number(e.target.value) : null;
    const newPrice = { ...price, [e.target.name]: value };

    setPrice(newPrice);

    if (newPrice.min || newPrice.max) {
      onAdd({
        name: "price",
        fn: (product) => {
          if (newPrice.min && newPrice.max) {
            return (
              product.price >= newPrice.min && product.price <= newPrice.max
            );
          }
          if (newPrice.min) {
            return product.price >= newPrice.min;
          }
          return product.price <= newPrice.max;
        },
      });
    } else {
      onDelete("price");
    }
  };

  return (
    <>
      <div className="search-container font-medium">
        <input
          type="search"
          id="search"
          placeholder="Поиск"
          onChange={handleChangeSearch}
        />
        <svg
          className="w-[10px] h-[10px] text-gray-800 dark:text-white icon-search"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>

      <div className="filters-container font-medium">
        <div className="multiselect-filter-container">
          <p className="label-filter">По цвету</p>
          <div className="color-container">
            <input
              type="checkbox"
              id="black-color"
              name="Черный"
              onChange={handleChangeColor}
            />
            <label htmlFor="black-color">Черный</label>
          </div>
          <div className="color-container">
            <input
              type="checkbox"
              id="red-color"
              name="Красный"
              onChange={handleChangeColor}
            />
            <label htmlFor="red-color">Красный</label>
          </div>
          <div className="color-container">
            <input
              type="checkbox"
              id="white-color"
              name="Белый"
              onChange={handleChangeColor}
            />
            <label htmlFor="white-color">Белый</label>
          </div>
          <div className="color-container">
            <input
              type="checkbox"
              id="blue-color"
              name="Синий"
              onChange={handleChangeColor}
            />
            <label htmlFor="blue-color">Синий</label>
          </div>
          <div className="color-container">
            <input
              type="checkbox"
              id="beige-color"
              name="Бежевый"
              onChange={handleChangeColor}
            />
            <label htmlFor="beige-color">Бежевый</label>
          </div>
          <div className="color-container">
            <input
              type="checkbox"
              id="brown-color"
              name="Коричневый"
              onChange={handleChangeColor}
            />
            <label htmlFor="brown-color">Коричневый</label>
          </div>
        </div>
        <div className="range-filter-container">
          <p className="label-filter">По цене</p>
          <div className="range-container">
            <input
              type="number"
              name="min"
              placeholder="от"
              min={10}
              onChange={handleChangePrice}
            />
            <input
              type="number"
              name="max"
              placeholder="до"
              min={11}
              max={9999}
              onChange={handleChangePrice}
            />
          </div>
        </div>
      </div>
    </>
  );
}
