import React, { useState } from 'react';
import Products from "../../components/Product/index";

import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function ProductPage() {
  // const [size, setSize] = useState('large'); // default is 'middle'
    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

    if (loading){
      return (
          <div>Loading...</div>
      )
    };

  return (
    <main>
      <div className="wrap">
        <Products
          data = {data.getAllProducts}
        />
      </div>
    </main>
  );
}
export default ProductPage;
