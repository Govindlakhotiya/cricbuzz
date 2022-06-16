import React from 'react';
import styles from '../Footer/Footer.module.css';
import { AiFillAndroid } from "react-icons/ai";

const Footer = () => {
  return (
 <div style={{backgroundColor: "#4a4a4a",paddingTop:"20px"}}>     
    <div className={styles.container}>
        <div className={styles.img}>
        <img height="35px" src="https://www.cricbuzz.com/images/cb_logo.svg"/>
        </div>
        <div className={styles.mobile} style={{textAlign:"left"}}>
         <h4>MOBILE SITE & APPS</h4>
         <p><span style={{marginRight:"10px"}}><i class="fa-solid fa-globe"></i></span>m.cricbuzz.com</p>   
         <p><AiFillAndroid/>Android</p>   
         <p><span style={{marginRight:"10px"}}><i className="fa-brands fa-apple"></i></span>iOS</p>
        </div>
    <div style={{textAlign:"left"}}>
       <h4>FOLLOW US ON</h4>
       <p><span style={{marginRight:"10px"}}><i className="fa-brands fa-facebook-f"></i></span>facebook</p>
       <p> <span style={{marginRight:"10px"}}><i className="fa-brands fa-twitter"></i></span>twitter</p>
       <p> <span style={{marginRight:"10px"}}><i className="fa-brands fa-youtube"></i></span>youtube</p>
       <p> <span style={{marginRight:"10px"}}><i className="fa-brands fa-pinterest-p"></i></span>Pinterest</p>
    </div>
    <div style={{textAlign:"left"}}>
       <h4 >Company</h4>
       <p > Careers</p>
       <p>Advertise</p>
       <p>Privacy Policy</p>
       <p>Terms of Use</p>
       <p>Cricbuzz TV Ads</p>
       
    </div>
  
     
    </div>
    <div className="text-white text-center px-4">&copy; 2022 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times</div>
    </div>    
  )
}

export default Footer
