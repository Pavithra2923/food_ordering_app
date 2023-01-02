import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { register_user, setRegisterDetail } from "../Slices/HomeSlice"



export default function Register(){

    const { regiser_detail } = useSelector((state)=>state.counteruser)

    const dispatch = useDispatch()

   
    
  return(
        <>
        <div className="mask d-flex align-items-center">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-6">
                        <div className="card" border-radius='15px'>
                            <div className="card-body">
                                <h3 className="text-uppercase text-center">Create an account</h3>
                                <form>

                <div className="form-outline mb-4">
                  <input type="text" value={regiser_detail.name} className="form-control form-control-lg" placeholder="your Name" onChange={(e=>dispatch(setRegisterDetail({...regiser_detail,name:e.target.value})))}/>
                  
                </div>

                <div className="form-outline mb-4">
                  <input type="email" value={regiser_detail.email} className="form-control form-control-lg" placeholder="your Email" onChange={(e=>dispatch(setRegisterDetail({...regiser_detail,email:e.target.value})))} />
                  
                </div>

                <div className="form-outline mb-4">
                  <input type="password" value={regiser_detail.password} className="form-control form-control-lg" placeholder="your Password" onChange={(e=>dispatch(setRegisterDetail({...regiser_detail,password:e.target.value})))}/>
                  
                </div>

                <div className="form-outline mb-4">
                  <input type="text" value={regiser_detail.address} className="form-control form-control-lg" placeholder="your Address" onChange={(e=>dispatch(setRegisterDetail({...regiser_detail,address:e.target.value})))}/>

                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={regiser_detail.phone} className="form-control form-control-lg" placeholder="your Mobile Number" onChange={(e=>dispatch(setRegisterDetail({...regiser_detail,phone:e.target.value})))}/>
                  
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={regiser_detail.city} className="form-control form-control-lg" placeholder="your City" onChange={(e=>dispatch(setRegisterDetail({...regiser_detail,city:e.target.value})))}/>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={regiser_detail.area} className="form-control form-control-lg" placeholder="your Area" onChange={(e=>dispatch(setRegisterDetail({...regiser_detail,area:e.target.value})))} />
                </div>
                <div className="form-outline mb-4">
                  <input type="text" value={regiser_detail.pin} className="form-control form-control-lg" placeholder="your Pin" onChange={(e=>dispatch(setRegisterDetail({...regiser_detail,pin:e.target.value})))}/>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={()=>dispatch(register_user(regiser_detail))}>Register</button>
                    
                </div>
                <Link to='/Login'><h6>Login here</h6></Link>

              </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}