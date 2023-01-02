 import React, { useEffect } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { Link, useNavigate } from "react-router-dom";
 import { setUserDetails,login_user } from "../Slices/HomeSlice";
 

 export default function Login(){

        const {user_detail,IsLogin} = useSelector((state)=>state.counteruser)

        const navigate = useNavigate();

        useEffect(()=>{
            if(IsLogin){
                navigate('/')
            }
        },[IsLogin]
        )

        const dispatch = useDispatch() 

    return(
        <>
        <div className="login_page container">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" className="rounded mx-auto d-block" width=' 17%'/>
            <h2 className="text-center mt-10">Login or <Link to='/register' className="login_link">Create an Account?</Link></h2>
            <form className="form-section">
                <div className="box-email form-group m-10">
                    <input type="email" className="form-control" value={user_detail.email} placeholder="Email or User name" onChange={(e=>dispatch(setUserDetails({...user_detail,email:e.target.value})))}/>
                </div>
                <div className="box-password form-group">
                    <input type="password" className="form-control" value={user_detail.password} placeholder="Password" onChange={(e=>dispatch(setUserDetails({...user_detail,password:e.target.value})))}/>
                </div>
                <a className="forgot-password dropdown-item text-center" href="#">Forgot password?</a>
                <button type="button"  className="sign-in btn btn-primary btn-block" onClick={()=>dispatch(login_user(user_detail))}>Login</button>
                <p className="text-center">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
            </form>
        </div>
        </>
    )
 }