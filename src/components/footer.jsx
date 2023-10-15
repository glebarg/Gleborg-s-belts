import React, { useEffect, useState } from 'react';
import "./footer.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Footer =() =>{
    const [showFooter, setShowFooter] = useState(false);
    const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        <div>
            <footer class="footer">
  <div class="container">
    <div class="footer-content">
      <p>&copy; 2023 Gleborgs Belts. All rights reserved.</p>
      <ul class="footer-links">
        <li className='btn1' onClick={() => {
        navigate("/");
        window.dataLayer.push({
          'event': 'GTMevent',
          'event_name': 'footer_home_click' 
        });
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }}>Home</li>
        
        <li className='btn3' onClick={() => {navigate("/shop");
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      window.dataLayer.push({
        'event': 'GTMevent',
        'event_name': 'footer_shop_click' 
      });
      }}>Production</li>
        <li className='btn4' onClick={() => {navigate("/contact");
        window.dataLayer.push({
          'event': 'GTMevent',
          'event_name': 'footer_contact_click' 
        });
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }}>Contact</li>
      </ul>
    </div>
  </div>
</footer>
        </div>

    );
};