import React from "react";
import womensbelt from "./womenbelts.jpg"
import "./aboutwomensbelts.css"
import { useNavigate } from "react-router-dom";
export const Aboutwomenbelts = ()=>{
    const navigate = useNavigate();
    return(

        <div className="conteiner2">
            <div className="women-text">
                <div className="warning">
                Women's belts
                </div>
                <div className="text">
                Women's belts are not only a functional accessory, but also a stylish wardrobe 
                element that allows you to add femininity and fire to any look. They serve several functions: 
                they decorate the waist, use trousers or skirts in the right place, and can also be used to create 
                contrast or accent in an outfit.
                </div>
                <div className="btn"  onClick={() => {navigate("/shop");
                 window.dataLayer.push({
                    'event': 'GTMevent',
                    'event_name': 'women_cta_click' 
                  });
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }}> Go to the shop </div>
            </div>
            <img src = {womensbelt} className="img-women"/>

        </div>
    );
};