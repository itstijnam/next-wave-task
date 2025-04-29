import { useEffect } from 'react'
import axios from 'axios';
import { setProducts } from '../redux/productSlice';
import { useDispatch } from 'react-redux';

function GetAllProducts() {
    const dispatch = useDispatch();
    useEffect(()=>{
      const fetchData = async ()=>{
          try {
              const res = await axios.get(`https://fakestoreapi.com/products`);
              if(res.status === 200){
                  dispatch(setProducts(res?.data))
              }
          } catch (error) {
              console.log(error?.response?.data);    
          }
      }
      fetchData();
  },[])
}

export default GetAllProducts;