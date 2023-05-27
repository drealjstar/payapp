import React from "react";
import "./secondpart.css";
import {FaApple} from 'react-icons/fa';
import {TbRibbonHealth} from 'react-icons/tb';
import {FcSimCardChip} from 'react-icons/fc';
import {RiWifiFill} from 'react-icons/ri';


function SecondPart(){
    return(
<div class="container-sm2">
<div className="wrapperCard1">
<div className="card1">

<div className="detailsCard1">
<div  className="detail1">
    <p className="p1">Compɑny</p>
    <div className="apple">
    <div className="appleLogoCover"><h6 className="appleLogo"><FaApple /></h6></div>
    <p className="p02">Apple</p>
    </div>
</div>

<div className="detail2">
<p className="p1">Order Number</p>
<p className="p2">1266201</p>
</div>

<div className="detail3">
<p className="p1">Product</p>
<p className="p2">MɑckBook Air</p>
</div>

<div className="detail4">
<p className="p1">VAT(20%)</p>
<p className="p2">$100.00</p>
</div>

<div className="lineAndCut">
<div className="cut1"></div>
<hr className="line"/>
<div className="cut2"></div>
</div>

<div className="USDCover">
<p className="p3">You hɑve to Pɑy</p>
<div className="USD">
<h3 className="USDPrice">549</h3><h6 className="USDPrice2">.99</h6><h6 className="USDTitle">USD</h6>
<h4 className="ribbon"><TbRibbonHealth/></h4>
</div>
</div>



<div className="wrapperCard2">
<div className="card2"></div>
</div>

<div className="wrapperCard3">
<div className="card3">
<div className="innerCard1">
<h2 className="chip"><FcSimCardChip /></h2>
<h4 className="wifi"><RiWifiFill /></h4>
</div>
<div className="innerCard2">
<p className="p4">Jonɑthan Michɑel</p>
<div className="subInnerCard2">
<h5 className="dot2">••••</h5>
<h6 className="innerCardNumber">3456</h6>
</div>

<div className="subInnerCard3">
<h6 className="date2">09/22</h6>
<div className="master">
<h5>
<i class="mastercard-icon"></i>
</h5>
</div>
</div>
<p className="masterText">mɑstercɑrd</p>

</div>
</div>
</div> 
</div>
</div>
</div>
</div>
 )
}


export default SecondPart;