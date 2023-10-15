import React from "react";
import { Aboutmensbelts } from "../../components/aboutmensbelts";
import { Aboutwomenbelts } from "../../components/aboutwomensbelts";
import { PRODUCTSMEN } from "../../productsmen";

import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      
      
      <div className="products">
        {PRODUCTSMEN.map((product) => (
          <Product data={product} />
        ))}
      </div>
      
     
    </div>
  );
};
