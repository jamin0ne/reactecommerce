import React,{useState,useEffect} from 'react';
import{Header} from 'semantic-ui-react';
import { collection, getDocs } from "firebase/firestore"; 
import ProductListing from './productPageComponents/ProductListing';
import "./ProductPage.css"
import {Db} from '../settingsAndConfig/DBconfig/FbConfig'
  	

 export default function ProductPage(props){
	  
	const [productsData,setproductsData] = useState([{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  },{
		title:"Yam",
		image:"https://cdn11.bigcommerce.com/s-58uvul1jf2/images/stencil/1280x1280/products/362/832/Fresh_Yam_2__47180.1619302542.1280.1280__50156.1656418056.jpg?c=1",
		price: 15,
		category:"tuber vegetable",
		short_description: "Tuber of yam, from west african region"
	  }]);
	   
 /*  const  getProductData = async()=>{
		     const DataArrangeMentArray = []
		const getproduct = await getDocs(collection(Db, "Products"));
		   getproduct.forEach(product=>{
			     DataArrangeMentArray.push({
					   id: product.id,
					   ...product.data()
				   })
			    }) 
		   setproductsData(DataArrangeMentArray)
		   console.log(DataArrangeMentArray)
	   }
	   
	      useEffect(()=>{getProductData()})*/
	  
          return ( <div class="marketplace-container">
			<span class="marketplace-text"><span>Products</span></span>
			       <ProductListing  ProductArray ={productsData} /></div>)
	 
}
