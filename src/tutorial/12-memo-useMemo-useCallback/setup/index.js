import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart((cart) => ++cart);
  }, []);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1
        style={{
          marginTop: "3rem",
        }}
      >
        cart: {cart}
      </h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

//? React.memo will receive the exact value and never re-render except if the value itself is change then its gonna re-rendering the data
//? in summary if its not change != re-render, vice-versa it will re-render
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("Big List called!");
  });

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("Single List called");
  });

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart} className="btn">
        add to cart
      </button>
    </article>
  );
};
export default Index;
