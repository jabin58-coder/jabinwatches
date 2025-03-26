import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section class="row">
            <div class="col-md-12">
                {/* <!-- nav tag will carry all the content of the navbar --> */}
                 <nav class="navbar navbar-expand-md navbar-light bg-light">
                    <Link rel="apple-touch-icon" href="%PUBLIC_URL%/logo123.png"></Link>
                    <Link href='' class="navbar-brand"><img src="logo123.png" alt="" className='logo_img'/><b>Premium Watches</b></Link>
                    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
 
                    {/* <!-- div that will carry all our nav links --> */}
                     <div className="collapse navbar-collapse" id="navbarcollapse">
                        <div className="navbar-nav link">
                            <Link to='/' className="nav-link active">Home</Link>
                            <Link to={'/Addproduct'} className="nav-link">Add products</Link>
                            <Link to={'/signin'} className="nav-link">Sign in</Link>
                            <Link to={'/signup'} className="nav-link">Sign up</Link>
                            <Link to={'/aboutus'} className='nav-link'>About us</Link>
                            
                        </div>
                     </div>
 
                 </nav>
 
            </div>
 
         </section>
   
  )
}

export default Navbar
