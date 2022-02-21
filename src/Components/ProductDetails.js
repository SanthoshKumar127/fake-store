import React from "react";
import { useSelector } from "react-redux";

function ProductDetails() {
  const productDetail = useSelector((state) => state.products.products);

  return (
    <div className="ui grid container">
      {Object.keys(productDetail).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src={productDetail.image}
                  alt={productDetail.title}
                />
              </div>
              <div className="column rp">
                <h1>{productDetail.title}</h1>
                <h2>
                  <a className="ui teal tag label" href={productDetail.title}>
                    ${productDetail.price}
                  </a>
                </h2>
                <h3 className="ui brown block header">
                  {productDetail.category}
                </h3>
                <p>{productDetail.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
