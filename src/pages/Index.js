 import React, { useEffect, useState} from "react";
 import { Link,useNavigate,useParams } from "react-router-dom";
 import { useDispatch, useSelector } from "react-redux";
 import { addToCart ,IsLogged } from "../Slices/HomeSlice";
 import { setReadData } from "../Slices/HomeSlice";
import axios from "axios";
 

 export default function ItemPage(){
    
    const { read_data ,IsLogin } = useSelector ((state) => state.counteruser)
    console.log(read_data)

    const navigate = useNavigate()

    const dispatch = useDispatch()
   
    const read_value =  async ()=>{
        const {data} = await axios.get("http://localhost:60000/read")
        dispatch(setReadData(data))
        console.log(data)

    }

    useEffect(()=>{
        read_value()
    },[])

    const  params = useParams()
    console.log(params.hotel_name)
    
    let item_details = read_data.filter((data)=>{
        
    })
    console.log(item_details)


  return(
      <>
 
      {/* <h1>hai{params.hotel_name}</h1> */}
    
          {read_data  && read_data.map((item)=>{
            console.log("item",item)
             if(item.hotel_name==params.hotel_name){
                 return (
                     <>
                     <div className="body">

                    
                     <div className="cardtop">
                     <h1>{item.hotel_name}</h1>
                     </div>
                     <div className="container row">
                     {JSON.parse(item.menu).map((data)=>{console.log(data)
                         return(
                             <>
                             <div className="card col-4 mt-10">
                                <img src={data.img} className="card-img-top" alt="..."/>
                                
                                <dl class="row content">
                                    <dt class="col-sm-5 mt-10">Food_Item</dt> 
                                        <dd class="col-sm-7"><h5>{data.title}</h5></dd>

                                    <dt class="col-sm-5">Price</dt>
                                        <dd class="col-sm-7"><p>{data.price}</p></dd>

                                    <dt class="col-sm-5">Serve_for</dt>
                                    <dd class="col-sm-7">{data.serve_for}</dd>
                                    <dt class="col-sm-5">Description</dt>
                                    <dd class="col-sm-7">{data.description}</dd>
                                </dl> 
                                {IsLogin ?  <Link to='/cart'>
                                <button type='button' className='btn btn-danger' onClick={()=>dispatch(addToCart(data))}>Add to Cart</button>
                                </Link> : navigate('/Login')}  
                             </div>
                            

                             </>
                         )
                     })} 
                        </div>
                        </div>
                     </>
                 )

             }

         
      })
      }
   
       

      </>
      )
 }

