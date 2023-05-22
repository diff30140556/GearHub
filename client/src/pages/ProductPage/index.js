import React, { useState, useEffect } from "react";
import { QUERY_ONE_PRODUCT } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Products from "../../components/Product/index";

function ProductPage() {
  // const [size, setSize] = useState('large'); // default is 'middle'
  const { itemId } = useParams();

  const { loading, data } = useQuery(QUERY_ONE_PRODUCT, {
    variables: { productId: itemId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data.findProducts);

  return (
    <main>
      <div className="wrap">
        <Products data={data.findProducts} />
      </div>
    </main>
  );
}
export default ProductPage;
