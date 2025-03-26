import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Signin=()=>{
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const navigate=useNavigate()

    // function to handle what happens when the form has been submitted 

    const submit=async(e)=>{

        // to prevent normal behaviour of reloading the page
        e.preventDefault()

        // Update the loading hook

        setLoading("Hang on as we sign you in")

        try {
            // prepare our formdata object
            const data=new FormData()
            // we append updated hooks to our objects
            data.append("email", email)
            data.append("password", password)

            // we use axios to access the request methods i.e post,get
            // we async allows us to use await
            // which hold the execution of other lines of code untill there is api response

            const response=await axios.post("https://jabin1234.pythonanywhere.com/api/signin",data)

            if (response.data.user){
                localStorage.setItem("user",JSON.stringify(response.data.user))
                // if the login is a success we navigate to get product component automatically

                navigate("/")
            }else{
                setLoading("")
                setError(response.data.message)
            }

            
        } catch (error) {

            // in the event there is an error we clear loading hook 
            setLoading("")
            // update error hook  with the actual error
            setError(error.message)

            
        }


    }
    return(
        <div className="row justify-content-center mt-4">
            
            
            <div className="card shadow col-md-6 p-5 text-center">
            <h2 className="name">Sign in</h2>
            <form onSubmit={submit}>
                <span className="text-info fs-4">{loading}</span>
                <span className="text-danger">{error}</span>
                <input type="email" className="form-control" placeholder="Enter your email" required value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
                
                <input type="password" className="form-control" placeholder="Enter your password" required  value={password} onChange={(e)=>setpassword(e.target.value)} /><br/>

                <button type="submit" className="btn btn-primary w-100">Sign in</button>
            </form>

            <p>Don't have an account? <Link to={"/Signup"}>Sign up</Link></p>

            </div>
            
        </div>
    )
}
export default Signin