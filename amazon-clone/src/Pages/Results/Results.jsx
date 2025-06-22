import React, { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./results.module.css";
import { productUrl } from "../../Api/endPoints";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <>
          {isLoading ?(<Loader />) : <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard 
            key={product.id} 
            product={product}
            renderDesc={false}
            renderAdd={true}
            /> 
          ))
        }
        </div>
      </section>
          
        }
          </>
      
    </LayOut>
  );
}

export default Results;
