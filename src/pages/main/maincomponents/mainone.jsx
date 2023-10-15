import React from "react";
import "./mainone.css"
import menwithbelt from "./menwithbelt.png"
import { useNavigate } from "react-router-dom";
export const Mainone = () => {
  const navigate = useNavigate();
    return (
      <div className="">
       
      <div className="gleborg">
      
      </div>
      <div className="cont1">
      <img className="gleborgsbeltimg" src={menwithbelt}></img>
      <button className="btn-1"  onClick={() => {navigate("/shop");
      window.dataLayer.push({
        'event': 'GTMevent',
        'event_name': 'shop_now_click' 
      });
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }}>Shop now!</button>
      </div>

      <div className="gleborgsbeltconteiner">
        <div className="gleborgbelttext" >
        Our company was founded with the goal of offering customers a wide range of 
        belts in various types and sizes to suit any project or application. We understand
         that every client is unique and has specific requirements, so we strive to offer the
          most suitable option for each.
        </div>
      
        <div className="gleborgbelttext">
        At Gleborg's Belts we cooperate only with reliable manufacturers and suppliers 
        to guarantee the high quality of our products. We care about the safety of our customers
         and offer only belts made from strong and durable materials to ensure reliability and long service life.
        </div>
        <div className="gleborgbelttext">
        Our professional and friendly staff is always ready to help you find exactly what you need. We have 
        a wealth of experience in belts and can provide expert advice and guidance to help you make the right
         decision when choosing a product.
        </div>
        </div>
        
      </div>
    );
  };