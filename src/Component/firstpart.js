import React from "react";
import "./firstpart.css";
import { RiCopperCoinFill } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { CgMenuGridR } from 'react-icons/cg';
import SecondPart from "./secondpart";

function FirstPart() {
        return (
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
                                                        <h4 className="editIcon">< MdOutlineEdit /></h4>
                                                        <h6 className="editText">Edit</h6>
                                                </div>
                                        </div>
                                        <div className="cardNumberCover">
                                                <div className="icon3">
                                                        <h5>
                                                                <i class="mastercard-icon"></i>
                                                        </h5>
                                                        <h4 className="markIcon"><IoMdCheckmarkCircle /></h4>
                                                </div>
                                                <div className="numberCover"><p className="cardNumber">2412  -  7512  -  3412  -  3456</p></div>
                                        </div>
                                        <div className="cvv">
                                                <div className="cvvHeaderWrapper">
                                                        <h6 className="cvvHeader">CVV Number</h6>
                                                        <p className="cvvText">Enter the 3 or 4 digit number on the card</p>
                                                </div>
                                                <div className="numberCover2">
                                                        <p className="cvvNumber">327</p>
                                                        <h4 className="cvvIcon"><CgMenuGridR /></h4>
                                                </div>
                                        </div>
                                        <div className="date">
                                                <div className="dateHeaderWrapper">
                                                        <h6 className="dateHeader">Expiry dɑte </h6>
                                                        <p className="dateText">Enter the expirɑtion dɑte of the cɑrd</p>
                                                </div>
                                                <div className="dateCover">
                                                        <div className="dateInput">
                                                                <p className="dateNumber">09</p>
                                                        </div>
                                                        <h4 className="slash">/</h4>
                                                        <div className="dateInput2">
                                                                <p className="dateNumber2">22</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="password">
                                                <div className="passwordHeaderWrapper">
                                                        <h6 className="passwordHeader">Pɑssword</h6>
                                                        <p className="passwordText">Enter your Dynɑmic pɑssword</p>
                                                </div>
                                                <div className="passwordCover">
                                                        <p className="passwordNumber">••••••••</p>
                                                        <h4 className="cvvIcon"><CgMenuGridR /></h4>
                                                </div>
                                        </div>
                                        <div className="button">Pɑy Now</div>
                                </div>
                                <SecondPart />
                        </div>
                </div>
        )
}

export default FirstPart;