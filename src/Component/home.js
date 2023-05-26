import React from "react";
import "./home.css";
import { RiCopperCoinFill } from 'react-icons/ri';
import {GrEdit } from 'react-icons/gr';


function Home(){
return(
<div class="container-xxl">
        <div class="container-lg">
        <div class="container-sm">
        <div className="header">
         <div className="sub-header">
        <h1 className="icon"><RiCopperCoinFill /></h1>
        <h3 className="title1">AceCoin</h3><h3 className="title2">Pɑy</h3>      
        </div> 
        <div className="time">
            <span className="firstNum"><h3 className="num">0</h3></span>
            <span className="secondNum"><h3 className="num">1</h3></span>
            <span className="thirdNum"><h3 className="dot">:</h3></span>
            <span className="fourthNum"><h3 className="num">1</h3></span>
            <span className="fifthNum"><h3 className="num">9</h3></span>
            </div>
            </div>
            <div className="paymentCard">
            <div className="digit">
            <h6 className="digitHeader">Cɑsh Number</h6>
            <p className="digitText">Enter the 16-digit cɑrd number on the cɑrd</p>
            </div>
             <div className="edit">
             <h4 className="editIcon"><GrEdit /></h4>
             
             <h6 className="editText">Edit</h6>
             </div>





            </div>







 

       </div>
        <div class="container-sm2"></div>



        </div>



        </div>
        )
}

export default Home;