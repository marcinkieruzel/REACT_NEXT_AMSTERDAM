import React from "react";
import "./App.css";
const data = require("./data.json");

const Product = ({
  title,
  image,
  price,
  link,
}: {
  title: string;
  image: string;
  price: string | number;
  link: string;
}) => {
  return (
    <li className="item">
      <a href={link} title={title} className="product-image">
        <div className="corner-top"></div>
        <img

          src={image}
          alt={title}
        />
      </a>
      <div className="product__info">
        <div>
          <div className="product-name">
            <a href={link} title={title}>
              {title}
            </a>
          </div>
        </div>

        <div className="price-box">
          <span className="regular-price">
            <span className="price">{price}</span>
          </span>
        </div>
      </div>
    </li>
  );
};

function App() {
  return (
    <div
      className="mb-content"
      style={{
        width: "1200px",
        margin: "0 auto",
      }}
    >
      <h1>I amsterdam</h1>
      <div className="mb-category-products">
        <div className="category-products">
          <ul className="products-grid products-grid--max-4-col">
            {data.map((x: any, i: number) => {
              return (
                <Product
                  key={i}
                  title={x.title}
                  price={x.price}
                  link={x.link}
                  image={x.img}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
