import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="nameOfTheCompany links">
        <div className="hover" onClick={() => {
        navigate("/");
        window.dataLayer.push({
          'event': 'GTMevent',
          'event_name': 'logo_click' 
        });

      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }}> Gleborg's belts </div>
      </div>
      <div className="links">
        <div className="hover" onClick={() => {
        navigate("/shop");
        window.dataLayer.push({
          'event': 'GTMevent',
          'event_name': 'header_shop_click' 
        });
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }}> Shop </div>
        <div className="hover" onClick={() => {
        navigate("/contact");
        window.dataLayer.push({
          'event': 'GTMevent',
          'event_name': 'header_contact_click' 
        });
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }}> Contact Us </div>
        <div className="hover" onClick={() => {
        navigate("/cart");
        window.dataLayer.push({
          'event': 'GTMevent',
          'event_name': 'header_cart_click' 
        });
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }}>
          <ShoppingCart size={32} />
        </div>
      </div>
    </div>
  );
};
