import React, { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
// import classes from './productdetail.module.css'
import ProductCard from "../../Components/Product/ProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../Components/Loader/Loader";
// import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard 
      product={product}
      flex = {true}
      renderDesc={true}
      renderAdd={true}
      />}
    </LayOut>
  );
}

export default ProductDetail;
