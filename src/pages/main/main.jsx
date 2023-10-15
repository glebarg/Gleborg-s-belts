import React from "react";
import { Aboutmensbelts } from "../../components/aboutmensbelts";
import { Aboutwomenbelts } from "../../components/aboutwomensbelts";
import { Mainone } from "./maincomponents/mainone"

export const Main = () => {
    return (
      <div className="shop">
        <Mainone/>
        <Aboutmensbelts/>
       
        <Aboutwomenbelts/>
       
      </div>
    );
  };