import React from "react";
import { categoryInfos } from "./CategoryFullInfos";
import classes from "./category.module.css";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos?.map((infos) => (
        <CategoryCard data={infos} key={infos.name} />
      ))}
    </section>
  );
}

export default Category;
