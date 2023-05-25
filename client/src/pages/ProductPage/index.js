import React from "react";
import { QUERY_ONE_PRODUCT } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Products from "../../components/Product/index";

function ProductPage() {
  const { itemId } = useParams();

  const { loading, data } = useQuery(QUERY_ONE_PRODUCT, {
    variables: { productId: itemId },
  });
  if (loading) {
    return (
      <main>
        <div className="wrap">
          <div className="text-white fs-1 text-center">Loading...</div>;
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="wrap">
        <Products data={data.findProducts} />
      </div>
    </main>
  );
}
export default ProductPage;
