import React , {useEffect}from 'react'
import { useSelector , useDispatch} from 'react-redux'//to get access to the state
import axios from 'axios'
import ProductComponent from './ProductComponent'
import {setProducts} from "../redux/actions/productActions"
const ProductListing = () => {
const products = useSelector((state)=>state)
const dispatch = useDispatch()
// we use axios  to fetch products that means to get the data from the server 
const fetchProducts =async  () =>{
  const response = await axios
.get ("http://fakestoreapi.com/products")
.catch( (err)=>console.log("err",err))
dispatch(setProducts(response.data)) 
}

useEffect(()=>{
  fetchProducts()
}, [])

console.log(products)

  return (
    <div className='ui grid container'>
      <ProductComponent  />
    </div>
  )
}

export default ProductListing
