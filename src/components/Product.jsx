export default function Product({ product }) {
  const noImgUrl = "./images/no-image.png";
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.imgUrl ?? noImgUrl} alt="" />
      </div>

      <div className="product-description-container">
        <h3 className="product-category">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-item-container">
          <span className="product-items">Цвет:</span>
          <span className="product-items-filled"> {product.color}</span>
        </div>
        <div className="product-item-container">
          <span className="product-items">Цена: </span>
          <span className="product-items-filled"> {product.price} руб</span>
        </div>
        <div className="product-item-container">
          <span className="product-items">Рейтинг: </span>
          <span className="product-items-filled">{product.rating}</span>
        </div>
      </div>
    </div>
  );
}
