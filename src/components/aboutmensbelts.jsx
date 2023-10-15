import React from "react";
import "./aboutmensbelts.css"
import mensbelt from "./mensbelts.png"
import { useNavigate } from "react-router-dom";
export const Aboutmensbelts = () =>{
    const navigate = useNavigate();
    return (
        <div>
            <div className="indentation">
            <p></p>
            </div>
            <div className="conteiner">
                
               <img src = {mensbelt} className="img-men"/>
           <div className="men-conteiner">
                <div className="warning">
                Men's belts
                </div>
                <div className="text-men">
                Men's belts can be a stylish and practical accessory 
                that will emphasize masculinity and complement any outfit. 
                Belts can be made of various materials: genuine leather, suede,
                 textile, polyurethane or metal. They can have different widths: 
                 from narrow and openwork to wide and massive.
                </div>
                <div className="btn"  onClick={() => {navigate("/shop");
                window.dataLayer.push({
                    'event': 'GTMevent',
                    'event_name': 'men_cta_click' 
                  });
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }}> Go to the shop </div>
               
            </div>
        </div>
        </div>

    );
};