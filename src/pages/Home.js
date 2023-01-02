import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { read_value } from "../Slices/HomeSlice";
import { setReadData } from "../Slices/HomeSlice";
import axios from "axios";

export default function HomePage(){

    const { hotel_detail ,read_data} = useSelector((state) => state.counteruser)
    console.log(hotel_detail)
    console.log(read_data)

    // const read_value = async()=>{
    //     const {data} = await axios.get("http://localhost:60000/read")
    //     console.log(data)

    // }
     const dispatch = useDispatch()
     const bracket = (/^\[([\s\S]*)]$/, "$1")
     const read_value =  async ()=>{
        const {data} = await axios.get("http://localhost:60000/read")
        dispatch(setReadData(data))
        console.log(data)

    }

    useEffect(()=>{
        read_value()
    },[])
    
    return(
        <>
       <div className="body">

      
        <div className="title">
        <h3>Popular  Restarunt  Around  Us!</h3>

        </div>
        

        <div className="container row">
        { read_data  && read_data .map((item)=>{
                return(
                <>
                <Link to={`/items/${item.hotel_name}`}>
                    <div className="card col-11 mt-10">
                        <img src={item.img} className="card-img-top"  alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.hotel_name}</h5>
                            {JSON.parse(item.catagory).map((cata)=>{
                                return(
                                    <p>{cata}</p>
                                )
                            })}
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>{item.location}</p>
                            
                            <button type="button" className="btn btn-primary">View Items</button>
                        </div>
                    </div>
                </Link>
                </>
                )   
            })
            }
            </div>
            </div>
            </>
            )
        }