export default function ProductSorter({ sort, onChange }) {
  const handleSortChange = (e) => {
    onChange(e.target.name);
  };
  return (
    <div className="sort-container">
      <button
        name="cheap"
        className={
          sort === "cheap" ? "btn sort-btn-active" : "btn sort-btn font-medium"
        }
        onClick={handleSortChange}
      >
        Сначала дешевые
      </button>
      <button
        name="expensive"
        className={
          sort === "expensive"
            ? "btn sort-btn-active font-medium"
            : "btn sort-btn"
        }
        onClick={handleSortChange}
      >
        Сначала дорогие
      </button>
      <button
        name="popular"
        className={
          sort === "popular"
            ? "btn sort-btn-active font-medium"
            : "btn sort-btn"
        }
        onClick={handleSortChange}
      >
        Сначала популярные
      </button>
    </div>
  );
}
