import React from 'react';
import {Link} from 'react-router-dom';
import AfricanMap from "./africanMap.svg";
import BillboardImage from "./blurYamimage.png"

export default function HomePage(){
	
	return  ( 
		<React.Fragment>
		<img
		alt="image62310"
		src={BillboardImage}
		class="landing-image6"
	  />
	  <div class="landing-frame7">
		<div class="landing-frame5">
		  <span class="landing-text10"><span>Welcome to</span></span>
		  <span class="landing-text12"><span>OYIBO MARKET</span></span>
		  <span class="landing-text14">
			<span>
			  Your online store for Afro-Caribbean food items in Bulgaria
			</span>
		  </span>
		</div>
		<div class="landing-frame71">
		  <Link to="/ProductsPage"><span class="landing-text16"><span>View Products</span></span></Link>
		</div>
	  </div>
	  <img
		alt="africamapsvgrepocom43419"
		src= {AfricanMap}
		class="landing-africamapsvgrepocom4"
	  />
	  <div class="landing-frame18">
		<div class="landing-frame16">
		  <div class="landing-frame9">
			<span class="landing-text18"><span>About Us</span></span>
			<span class="landing-text20">
			  <span>
				<span>
				  OYIBO MARKET is an online grocery store that brings the
				  taste of Afro-Caribbean food to Bulgaria.
				</span>
				<br />
				<span>
				  Whether you're looking for something to cook up for
				  yourself or a friend or family member who's craving some
				  Afro-Caribean food, Oyibo Market has all the ingredients
				  you need.
				</span>
				<br />
				<span></span>
				<br />
				<span>
				  No matter where you are in Bulgaria, you can order your
				  Afro-Caribbean items from us and get it delivered right to
				  your door. We have a variety of options for delivery. You
				  can choose between home delivery or pick-up at our store.
				  No matter what kind of food you want to enjoy, we have
				  something for everyone!
				</span>
			  </span>
			</span>
		  </div>
		  <div class="landing-frame10">
			<span class="landing-text29"><span>Contact Us</span></span>
			<span class="landing-text31">
			  <span>
				<span>Working hours: Monday - Saturday 10:00 - 17:00.</span>
				<br />
				<span></span>
				<br />
				<span>
				  Our delivery service is available throughout Bulgaria.
				  Delivery times:
				</span>
				<br />
				<span>Within Sofia: 0-2 business days</span>
				<br />
				<span>Outside Sofia: 2-5 business days</span>
				<br />
				<span></span>
				<br />
				<span>
				  For adjustment or cancellation of orders, please send us
				  an email at *****@example.com with your name and order
				  reference number included in the subject line, and we will
				  respond to you accordingly
				</span>
			  </span>
			</span>
		  </div>
		  <div class="landing-frame72">
		  <Link to="/ProductsPage"><span class="landing-text46"><span>Check out our products</span></span></Link>
			 </div>
			 </div>
			 </div>
			 </React.Fragment>
	)
}