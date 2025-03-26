import axios from "axios"
import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"




const Makepayment=()=>{
    const{product,img_url}=useLocation().state||{}
    const[phone,setphone]=useState("")
    const[Loading,setLoading]= useState("")
    const[error,seterror]=useState("")
    const[success,setsuccess]=useState("")
    
    //  make payment
    const submit=async (e) => {
        e.preventDefault()
        setLoading("Please wait...")

        //  Prepare data
         const data= new FormData()
        //   append data
        data.append("phone",phone)
        data.append("amount",product.product_cost)

        try {
            const response= await axios.post("https://jabin1234.pythonanywhere.com/api/mpesa_payment",data)
            setLoading("")
            seterror("")
            setsuccess(response.data.message)
            
        } catch (error) {
            setLoading("")
            setsuccess("")
            seterror(error.message)
            
        }
    }
    return(
        <div className="row justify-content-center mt-4" >
            <nav>
                <Link to={'/'} className="btn btn-secondary me-3">Home</Link>
                <Link to={'/addproduct'} className="btn btn-dark me-3">Add product</Link>
                <Link to={'/signin'} className="btn btn-dark me-3">Sign in</Link>
                <Link to={'/signin'} className="btn btn-dark me-3">Sign up</Link>
            </nav>
            <div className="card m-5 col-md-6 justify-content-center text-center">
            <h1 className="text-success">Lipa na Mpesa</h1>
            <span className="text-info">{Loading}</span>
            <span className="text-danger">{error}</span>
            <span className="text-info">{success}</span>
            <div>
                <img src={img_url+product.product_photo} alt="" className="product_img" />
            </div>
                <div className="card-body">
                    <h5>{product.product_name}</h5>
                    <p className="text-muted">{product.product_description}</p>
                    <b className="text-warning">{product.product_cost}</b><br />
                </div>
                <div className="card-footer">
                    
                    <form onSubmit={submit}>
                        <div><label className="fs-3" htmlFor=""><b>Phone Number to Pay</b></label><br /></div>  
                        <input type="tel" className="form-control" placeholder="2547.." required value={phone} onChange={(e)=>setphone(e.target.value)}/><br />
                        <button type="submit" className="btn btn-success">Pay Now</button>
                    </form>

                </div>
            </div>
        </div>
    )

}

export default Makepayment