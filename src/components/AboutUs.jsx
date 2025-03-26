import React from 'react'

function AboutUs() {
  return (
    <div className='container-fluid'> <img src="logo123.png" alt="" />
        <div className='col-md-12'>
            <h1 className='aboutus'>About Us</h1>
            <h3>Who We Are</h3>
            <p>Welcome to Jabin's Watches, where precision meets elegance. We are dedicated to crafting high-quality timepieces that blend innovation, craftsmanship, and timeless design. Our watches are more than accessories—they are a statement of style, confidence, and individuality.</p>

        </div>
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-success text-light m-2'>
                <h3>Our Mission</h3>
                <p>
                    <ul>
                        <li>To design and create watches that reflect sophistication, durability, and precision.</li>
                        <li>To offer affordable luxury, ensuring everyone can experience the elegance of a finely crafted timepiece.</li>
                        <li>To continually innovate, blending modern technology with classic watchmaking techniques.</li>
                        <li>To provide exceptional customer service, ensuring a seamless experience from selection to purchase.</li>
                    </ul>
                </p>

            </div>
            <div className='col-md-6 bg-success text-light m-2 '>
                <h3>Our Vision</h3>
                <p>To be the leading global brand in luxury and precision timepieces, setting the standard for innovation, craftsmanship, and timeless elegance.</p>

            </div>

            <marquee behavior="" direction="" className="marquee fs-8" > <i> Feel free to shop with us. You are welcomed once again!!</i></marquee>
        </div>
      
    </div>
  )
}

export default AboutUs
