import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    // hotel_detail:[
    //     {
    //         hotel_name:'Arya Bhavan',
    //         "catagory":"Chinese, South Indian,Biryani, Sweets",
    //         "location":"Vadasery",
    //         'images':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQfpZAoBC5P-5jp9LxFwHXyOjDe8Pnxaf7A&usqp=CAU',
    //         "menu":[
    //                 {
    //                     "id":1,
    //                     "title":"Mini-Tiffen",  
    //                     "price":"Rs.100",
    //                     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSnUAkx4U98-ZWx62XwcOxQCzAy11o_v6ZQ&usqp=CAU",
    //                     "serve_for":2,
    //                     "description":"Pure veg,2 mini-idly,min-pongal,mini-dosa,tea"
    //                 },
    //                 {
    //                     "id":2,
    //                     "title":"Ghee Roast",
    //                     "price":"Rs.100",
    //                     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMusVeqg1cRnYPMGewYphXJ_mxTnMLmNUhQ&usqp=CAU",
    //                     "serve_for":1,
    //                     "description":"Pure veg,with 3varity of chutneys"
    //                 },
    //                 {
    //                     "id":3,
    //                     "title":"Panner Masaala",
    //                     "price":"Rs.170",
    //                     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrWLUMPrhNAZyZm9XdvxFEBhyDyHv2LfFk2g&usqp=CAU",
    //                     "serve_for":1,
    //                     "description":"Pure veg,panner gravy with little peices"
                    
    //                 }]
    //     },                                               
    //     {
    //         hotel_name:'Odel Restarunt',
    //         "catagory":"Chinese, North Indian, South Indian,Biryani",
    //         "location":"Nagercoil",
    //         'images':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxz9IxyxW7Fw-5r-MxA7-AKKkavyRzNlzwQ&usqp=CAU',
    //         "menu":[
    //                 {
    //                     "id":4,
    //                     "title":"Chicken Briyani",
    //                     "price":"Rs.210",
    //                     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh5zbgs8lxJDF_RI2BuYbT1GtYDFx6hYiyQ&usqp=CAU",
    //                     "serve_for":2,
    //                     "description": "Non-veg,onion raitha,brinjal gravy,1egg,2chicken peices"
    //                 },
    //                 {
    //                     "id":5,
    //                     "title":"Mutton Sukka",
    //                     "price":"Rs.370",
    //                     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfUN409nhOOYXX6u-3wdWHTyvqayhU3HxRw&usqp=CAU",
    //                     "serve_for":2,
    //                     "description":"Non-veg,onion raitha,brinjal gravy,1egg,2chicken peices"
    //                 },
    //                 {
    //                     "id":6,
    //                     "title":"Protta with Beef Gravy",
    //                     "price":"Rs.230",
    //                     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tCQzMfriidsdOx5xPmi13DZuJ6i7AH2kgQ&usqp=CAU",
    //                     "serve_for":2,
    //                     "description":"non-veg,3protta,beef gravy,little peice of onions"
    //                 }]
    //     },
    //     {
    //         hotel_name:'Dominos Pizza',
    //         "catagory":'Pizzas',
    //         "location":"Nagercoil",
    //         'images':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_rXTMVHgLAeMUwRRzCaNTHYkIe_qg96T6Q&usqp=CAU',
    //         "menu":[
    //                 {
    //                     "id":7,
    //                     "title":"Cheesy Corn",
    //                     "price":"Rs.150",
    //                     "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ukiq6hopfqwmem48yjj3",
    //                     "serve_for":2,
    //                     "description":"Pure veg,corn,cheese"
    //                 },
    //                 {
    //                     "id":8,
    //                     "title":"Tandoori Chicken",
    //                     "price":"Rs.300",
    //                     "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nvocia0tbadvv8forqne",
    //                     "serve_for":2,
    //                     "description":"Crisp, roasted chicken wings in classic hot sauce and peri-peri flavour"
    //                 },
    //                 {
    //                     "id":9,
    //                     "title":"Creamy Tomato Pasta Veg",
    //                     "price":"Rs.120",
    //                     "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vyjjd29lce6zdpqlx4k9",
    //                     "serve_for":1,
    //                     "description":"Instant Fusilli Pasta, Harissa Sauce, Onion, Mushroom, Olives, Parsley sprinkle"
    //                 }]
    //             }, 
    //         ],
    read_data:[],
            cart : [],
            regiser_detail : {
                name :'',
                email :'',
                password :'',
                address :'',
                phone:'',
                city:'',
                area:'',
                pin:''
            },
            user_detail : {
                
                email : '',
                password : ''
             },
             IsLogin : false,

            get_api : []
}


export const counteruser= createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        addToCart : (state,action) => {
            state.cart = [...state.cart,action.payload]
        },
        removeCart : (state,action) => {
           state.cart=state.cart.filter((value,index)=>index!==action.payload)
        },
        setUserDetails : (state,action) => {
            state.user_detail=action.payload
        },
        setRegisterDetail : (state,action) => {
            state.regiser_detail =  action.payload
        },
        IsLogged : (state,action) =>{
            state.IsLogin=action.payload
        },
        setApiData:(state,action)=>{
            state.get_api = action.payload
        },
        setReadData:(state,action)=>{
            state.read_data=action.payload
        }
       
  } ,
  
})
    // export const read_value = ()=> async (dispatch)=>{
    //     const {data} = await axios.get("http://localhost:60000/read")
    //     dispatch(setReadData(data))
    //     console.log(data)

    // }



    export const login_user = (user_detail) => async (dispatch) => {
        const data = await axios.post('http://localhost:60000/login',JSON.stringify(user_detail));
        console.log(data.data)
        console.log(data)
        // if(data.counts=='1'){
            // localStorage.setItem('userDetails',JSON.stringify(data.data));
            // dispatch(IsLogged(true))
            // dispatch(setApiData(data.data))
             {data.data.map((value)=>{
                console.log(data.data)
                // console.log(value.COUNT)
                // const count=value[Object.keys(value)]
                // console.log(count)
                if(data.length!=0){
                    dispatch(IsLogged(true))
                    dispatch(setApiData(data.data))
                }
                else{
                    alert("check ur email and password")
                }
             })}  
        // }
    }

    export const register_user = (regiser_detail)=> async (dispatch)=>{
        const {data} = await axios.post('http://localhost:60000/registration',JSON.stringify(regiser_detail));
        console.log(data)
        
    }
   
   
  
  export const { addToCart , removeCart , setUserDetails, IsLogged, setRegisterDetail ,setApiData ,setReadData} = counteruser.actions
  
  export default counteruser.reducer