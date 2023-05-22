import React, { useState } from 'react';
import Products from "../../components/Product/index";

// import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
// import { useQuery } from "@apollo/client";

const data = {
  name: "MSI - Vector 15.6 inch 165hz Gaming Laptop",
  price: 2069.99,
  quantity: 10,
  description:
    "Game like a pro with this MSI Vector GP66 gaming laptop. The Intel Core i7 HX processor and 32GB of RAM run graphic-intensive games smoothly, while the 1TB SSD offers rapid start-ups and ample storage space. This MSI gaming laptop has an NVIDIA GeForce RTX 3070ti graphics card, which produces detailed images on the 15.6-inch QHD 165hz for advanced gameplay..",
  isNew: true,
  image: ["laptop1.jpg"],
  specification: {
    brand: "MSI",
    processor: "Intel Core i7",
    memory: "32GB RAM",
    storage: "1TB SSD",
  },
};

const { name, price, quantity, description, isNew, image, specification } = data;

function ProductPage() {
  // const [size, setSize] = useState('large'); // default is 'middle'
  // const [size, setSize] = useState('large'); // default is 'middle'
  //   const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  //   console.log(loading, data);
  //   if (loading){
  //     return (
  //         <div>Loading...</div>
  //     )
  //   };
  // const { name, price, quantity, description, isNew, image, specification } =
  //   data.getAllProducts;
  //   console.log(data.getAllProducts);

  return (
    <main>
      <div className="wrap">
        <Products
          name={name}
          price={price}
          quantity={quantity}
          description={description}
          isNew={isNew}
          image={image}
          specification={specification}
        />
      </div>
    </main>
  );
}
export default ProductPage;
