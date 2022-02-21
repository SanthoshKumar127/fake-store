import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productListAction } from "../Redux/actions/productListAction";
import ProductComponent from "./ProductComponent";

const Product = () => {
  const dispatch = useDispatch();
  useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productListAction());
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default Product;
