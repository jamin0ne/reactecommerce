import React,{useState,useEffect} from 'react';
import{Header} from 'semantic-ui-react';
import { collection, getDocs } from "firebase/firestore"; 
import ProductListing from './productPageComponents/ProductListing';
import {Db} from '../settingsAndConfig/DBconfig/FbConfig'
  	

 export default function ProductPage(props){
	  
	const [productsData,setproductsData] = useState([]);
	   
	   const  getProductData = async()=>{
		     const DataArrangeMentArray = []
		const getproduct = await getDocs(collection(Db, "Products"));
		   getproduct.forEach(product=>{
			     DataArrangeMentArray.push({
					   id: product.id,
					   ...product.data()
				   })
			    }) 
		   setproductsData(DataArrangeMentArray)
		   
	   }
	   
	      useEffect(()=>{getProductData()},[])
	  
          return ( <div><Header as='h3'> Food items </Header>
			       <ProductListing  ProductArray ={productsData} /></div>)
	 
}
