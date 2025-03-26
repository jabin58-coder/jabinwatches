import React from 'react'

function CarouselComp() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="slide3.jpeg" className="d-block w-100" style={{ height: "400px" }} alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="slide1.jpeg" className="d-block w-100" style={{ height: "400px" }} alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="slide2.jpeg" className="d-block w-100" style={{ height: "400px" }} alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default CarouselComp;
