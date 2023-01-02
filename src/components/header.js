import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IsLogged, setApiData} from "../Slices/HomeSlice";
import { useDispatch, useSelector } from "react-redux";
import { login_user } from "../Slices/HomeSlice";

export default function Header(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {IsLogin,get_api} = useSelector((state)=>state.counteruser)
    console.log(get_api)
    console.log(IsLogin)

    // useEffect(()=>{
    //     const localData = JSON.parse(localStorage.getItem('userDetails'))
    //     if(localData && localData.token){
    //         dispatch(IsLogged(true))
    //         dispatch(setApiData(localData))
            
    //     }else{
    //         navigate('/')   
    //     }
    // },[])
    
   const logout=()=>{
    dispatch(IsLogged(IsLogin=false))
    navigate('/Login')
   }
   const uname= get_api.map((value)=>{
    return value.name
    })
   console.log(uname)
   
   const location = get_api.map((value)=>{
    return value.address
   })


  
    return(
        <>
       
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" width='10%'/>
            <div className="collapse navbar-collapse hover_text" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {/* <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>*/}
                        <div className="p-4">
                           <Link to='/'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                                </svg><span className="span_name">Home</span>
                           </Link>
                        </div>
                    </li>
                    <li className="nav-item active">
                        {/* <a className="nav-link" href="#">Cart</a> */}
                        <div className="p-4">
                        <Link to='/cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16" >
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>   <span className="span_name">Cart</span>
                        </Link>
                        </div>
                    </li>
                    <li className="nav-item active">
                    {/* <a className="nav-link">Location</a> */}
                    <div className="p-4">
                        {/* <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg><span className="span_name">Location</span>
                        </Link> */}
                        
                          {!IsLogin ? <div className="main_pt"><a href=''><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg><span className="span_name" color="blue ">Location</span></a></div> : <p className="address">{location}</p>}
                     
 
            </div>
                    </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0"> 
               
                <div className="p-4 user">
                    {IsLogin  ? <p>{`Welcome  ${uname}`}</p> : null  }
                </div>
         
                {/* <p></p> */}
                <div className="p-2">
                    {IsLogin  ?  <button type="button" className="btn btn-warning" onClick={()=>dispatch(IsLogged(false))}>logout</button>:<button type="button" className="btn btn-warning" onClick={()=>navigate('/Login')}>login</button>}
                </div>
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
             </div>
        </nav>
    </>
    )
}