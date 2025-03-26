import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"


const Addproduct=()=>{
    const[product_name,setproduct_name]=useState("")
    const[product_description,setproduct_description]=useState("")
    const[product_cost,setproduct_cost]=useState("")
    const[product_photo,setproduct_photo]=useState("")
    const[Loading,setLoading]=useState("")

    // hooks for user information
    const[success,setsuccess]=useState()
    const[error,seterror]=useState()

    // function to handle submit

    const submit=async (e) => {
        // prevent reload 
        e.preventDefault()
        setLoading("Please wait...")

        // prepare object FormData
        const data=new FormData()
        // append updated hooks
        data.append("product_name", product_name)
        data.append("product_description",product_description)
        data.append("product_cost",product_cost)
        data.append("product_photo", product_photo)

        try {
            // send data to api
            const response = await axios.post("https://jabin1234.pythonanywhere.com/api/add_product",data)

            setLoading("")
            seterror("")
            setsuccess(response.data.message)
            
        } catch (error) {
            setLoading("")
            seterror(error.message)
            
        }
        
    }




    return(
        <div className="row justify-content-center mt-4">
            
            <div className="card shadow col-md-6 p-4 text-center">
        
            <form onSubmit={submit} >
                <h2>Add Products</h2>
                <span className="text-center text-info">{Loading}</span>
                <span className="text-center text-success">{success}</span>
                <span className="text-center text-danger">{error}</span>
                <input type="text" className="form-control" placeholder="Enter product name"  value={product_name} onChange={(e)=>setproduct_name(e.target.value)}/> <br />

                <textarea className="form-control" placeholder="Product Description" value={product_description} onChange={(e)=>setproduct_description(e.target.value)}></textarea> <br />


                <input type="number" className="form-control" placeholder="Product cost" value={product_cost} onChange={(e)=>setproduct_cost(e.target.value)} /><br/>
                
                <label htmlFor="">Browse/Upload product photo</label>
                <input type="file" className="form-control" accept="/image/*" onChange={(e)=>setproduct_photo(e.target.files[0])}/> <br />

                <button type="submit" className="btn btn-primary">Upload Product</button>
            </form>

             

            </div>
            
        </div>
    )
}
export default Addproduct