import ProductFilter from "./ProductFilter";
import ProductSorter from "./ProductSorter";
import Info from "./Info";
import Product from "./Product";
import generate from "../utils/generator";
import { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState(generate);
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("cheap");

  const handleAddFilter = (newFilter) => {
    setFilters((prevFilters) => {
      return [
        ...prevFilters.filter((filter) => filter.name !== newFilter.name),
        newFilter,
      ];
    });
  };

  const handleDeletFilter = (filterName) => {
    setFilters((prevFilters) => {
      return prevFilters.filter((filter) => filter.name !== filterName);
    });
  };

  const handleUpdateSort = (sort) => {
    setSort(() => sort);
  };

  const sortProducts = (products) => {
    switch (sort) {
      case "cheap":
        return products.sort((a, b) => a.price - b.price);
      case "expensive":
        return products.sort((a, b) => b.price - a.price);
      case "popular":
        return products.sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const filteredProducts =
    filters.length > 0
      ? products.filter((product) =>
          filters.every((filter) => filter.fn(product))
        )
      : products;

  const sortedProduct = sortProducts(filteredProducts);


  return (
    <div className="product-list-container">
      <ProductFilter onAdd={handleAddFilter} onDelete={handleDeletFilter} />
      <Info filters={sortedProduct} />
      <ProductSorter sort={sort} onChange={handleUpdateSort} />
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          sortedProduct.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>По вашим критериям ничего не найдено</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
