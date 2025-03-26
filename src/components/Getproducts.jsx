import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CarouselComp from "./CarouselComp"



const Getproducts=()=>{

    // initializing hooks
    const[Loading,setLoading]=useState("")
    const[Error,setError]=useState("")
    const[product,setproduct]=useState([])
    const[search,setsearch]=useState("")
    
    // navigate hook
    const navigate=useNavigate()

    const img_url="https://jabin1234.pythonanywhere.com/static/images/"

    //  function to fetch product from default

    const getproducts=async (e) => {
        setLoading("Please wait...")


        try {
            //  fetch data from api
            const response= await axios.get("https://jabin1234.pythonanywhere.com/api/get_products_details")
            setLoading("")
            setError("")
            setproduct(response.data)
            
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
        
    }

    useEffect(()=>{getproducts()},[])

    const filter_products=product.filter((item)=>(
        item.product_name.toLowerCase().includes(search.toLowerCase())
    ))
    
    // Extracting the logged in user from local storage

    const user=JSON.parse(localStorage.getItem("user"))



    return(

        
        <div className="row container-fluid">

                <CarouselComp></CarouselComp>
           
    
            <h2>Welcome {user.username}</h2>
            <div className="">
        
                <form className="border-solid-20px mt-2 mb-3" action="">
                    
                    <input type="search" placeholder="Search products..." className="search p-2" value={search}  onChange={(e)=>setsearch(e.target.value)}/>
                </form>
            </div>

            <div className="header text-light"><h2>Available Watches</h2></div>
            {/* Binding our hooks */}
            
            <span className="text-info">{Loading}</span>
            <span className="text-danger">{Error}</span>
            {filter_products.map((product)=>(
                <div className="col-md-3 justify-content-center mb-4">

                        
                        <div className="card shadow text-center">
                        <img src={img_url+product.product_photo} alt="" className="product_img" style={{
      transition: "transform 0.3s ease-out-in",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
                            <div className="card-body">
                                <h5 className="mt-2">{product.product_name}</h5>
                                <p className="text-muted">{product.product_description.slice(0,25)}</p>
                                <b className="text-warning">{product.product_cost}</b><br />
                                <button onClick={()=>navigate("/makepayment",{state:{product,img_url}})} className="btn btn-dark">Make Payment</button>

                            </div>
                
                        </div>


                </div>
            ))}
            
        </div>
        
    )
}
export default Getproducts