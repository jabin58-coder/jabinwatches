import React from "react";

function Footer() {
  return (
    <div>
      <section className="row bg-info m-5">
        <div className="col-md-4 text-light">
          <h5 className="text-center mt-3">OUR LOCATION</h5>
          <p>
            Our stores are located all over the country. Our headquarters are based in Nairobi.
            Our other stores are in Eldoret, Nakuru, Kitale, Kisumu, and Mombasa.
          </p>
          
          
        </div>

        <div className="col-md-4 text-light">
          <h5 className="text-center mt-3">CONTACT US</h5>
          <form>
            <input type="email" placeholder="Enter your email" className="form-control" />
            <br />
            <textarea className="form-control" rows="5" placeholder="Leave a Comment"></textarea>
            <br />
            <input type="submit" value="Send Message" className="btn btn-outline-danger mb-3" />
          </form>
        </div>

        <div className="col-md-4">
          <h5 className="text-center text-light mt-3">STAY CONNECTED</h5>
          <br />
          <div className="justify-content-center">
            <a href="https://www.facebook.com/profile.php?id=100089878331694">
              <img src="fb.png" alt="Facebook" height="45" className="m-2" />
            </a>
            <a href="https://www.instagram.com">
              <img src="in.png" alt="Instagram" height="45" className="m-2" />
            </a>
            <a href="https://www.x.com">
              <img src="x.png" alt="X" height="45" className="m-2" />
            </a>
            <a href="https://wa.me/254704857994">
              <img src="whatsapp.jpeg" alt="WhatsApp" className="whatsapp" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
