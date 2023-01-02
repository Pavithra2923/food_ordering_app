 import { Link,Navigate,useNavigate,useParams } from "react-router-dom";
 import { useDispatch, useSelector } from "react-redux";
 import { IsLogged, removeCart } from "../Slices/HomeSlice";
 import axios from "axios";


 export default function CartPage(){

    const {IsLogin,cart} = useSelector((state)=>state.counteruser)
    console.log(cart)

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const place_order=()=>{
    if(!IsLogin){
        alert('plz login')
        navigate('/Login')

    }else{
        {cart && cart.map((item,index)=>{
            alert(`total price is ${item.price}`) 
            alert("your order is placed successfully")
            navigate('/')
        })}
    }
    
 }

    return(
        <> 
        <div className="body">
            {/* <h1>hai{params.hotel_name}</h1> */}
        <div className="container row">
            {cart &&cart.map((item,index)=>{
                           return(
                               <>
                               <div className="card col-4">
                                  <img src={item.img} className="card-img-top" alt="..."/>
                                  <dl class="row">
                                    <dt class="col-sm-5">Food_Item</dt>
                                        <dd class="col-sm-7"><h5>{item.title}</h5></dd>

                                    <dt class="col-sm-5">Price</dt>
                                        <dd class="col-sm-7"><p>{item.price}</p></dd>

                                    <dt class="col-sm-5">Serve_for</dt>
                                    <dd class="col-sm-7">{item.serve_for}</dd>
                                    <dt class="col-sm-5">Description</dt>
                                    <dd class="col-sm-7">{item.description}</dd>
                                </dl> 
                                 
                                  <button type='button' className='btn btn-danger' onClick={()=>dispatch(removeCart(index),alert('remove ur item?'))}>Remove Cart</button>
                                  <button type='button' className='btn btn-warning' onClick={place_order}>Order Now</button>
                               </div>
                               </>
                           )
                    })
        }
        </div>
        </div>
      
  
        </>
        )
    
 }