import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cars() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const cars = [
    { brand: "BUGATTI", price: 30000, imgSrc: "/assets/images/bugatti.png" },
    { brand :"KOENIGSEGG", price:55000, imgSrc:"/assets/images/koni.png"},
    { brand: "ROLLS-ROYCE", price: 45000, imgSrc: "/assets/images/rolls.png" },
    { brand: "MERCEDES", price: 28000, imgSrc: "/assets/images/G-Wagon.png" },
    { brand: "BMW", price: 25000, imgSrc: "/assets/images/beamer.png" },
    { brand :"DODGE", price:45000, imgSrc:"/assets/images/viper.png"},
    { brand :"FORD", price:65000, imgSrc:"/assets/images/gt.AVIF"},
    { brand: "LAND ROVER", price: 45000, imgSrc: "/assets/images/rangerover.png" },
    { brand: "LAMBORGHINI", price: 39000, imgSrc: "/assets/images/lambo.png" },
    { brand: "FERRARI", price: 55000, imgSrc: "/assets/images/ferrari.png" },
    { brand: "TESLA", price: 48000, imgSrc: "/assets/images/tesla.png" },
    { brand: "MERCEDES", price: 58000, imgSrc: "/assets/images/mercid.png" },
    { brand: "LEXUS", price:40000, imgSrc:"/assets/images/lexu.png" },
    { brand: "ROLLS-ROYCE", price: 45000, imgSrc: "/assets/images/rolls1.png" },
    { brand :"CHEVROLET", price:45000, imgSrc:"/assets/images/camaro.png"},
    { brand: "LAND ROVER", price: 45000, imgSrc: "/assets/images/landi2.png" },
    { brand :"FORD", price:65000, imgSrc:"/assets/images/mushtang.png"},
    { brand: "AUDI", price: 35000, imgSrc: "/assets/images/audi1.png" },
    { brand :"PORSCHE", price:35000, imgSrc:"/assets/images/posh.png"},
    { brand :"DODGE", price:45000, imgSrc:"/assets/images/challanger.png"},
    { brand: "LEXUS", price:40000, imgSrc:"/assets/images/lexu1.png" },
    { brand: "MERCEDES", price: 28000, imgSrc: "/assets/images/mercid2.png" },
    { brand: "AUDI", price: 35000, imgSrc: "/assets/images/audi3.1.png" },
    { brand: "BMW", price: 75000, imgSrc: "/assets/images/bmw3.png" },
    { brand: "ROLLS-ROYCE", price: 45000, imgSrc: "/assets/images/rollsroyce.png" },
    { brand: "AUDI", price: 55000, imgSrc: "/assets/images/audi2.png" },
    { brand: "BMW", price: 35000, imgSrc: "/assets/images/bmw2.png" },
  ];

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleSearch = () => {
    const filtered = selectedBrand ? cars.filter(car => car.brand === selectedBrand) : cars;
    setFilteredCars(filtered);
  };
  return (
    <div className="main">
      <>
        <div className="search_section1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="search_taital">Search Your Best Cars</h1>
                {/* select box section start */}
                <div className="container">
                  <div className="select_box_section">
                    <div className="select_box_main">
                      <div className="row">
                        <div className="col-md-3 select-outline">
                          <select
                            className="mdb-select md-form md-outline colorful-select dropdown-primary"
                            value={selectedBrand}
                            onChange={handleBrandChange}
                          >
                            <option value="" disabled selected>
                              Any Brand
                            </option>
                            {cars.map((car, index) => (
                              <option key={index} value={car.brand}>
                                {car.brand}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-3">
                          <div className="search_btn">
                            <a href="#" onClick={handleSearch}>Search Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* select box section end */}
              </div>
            </div>
          </div>
        </div>
        <div> </div>
        {/* gallery section start */}
        <div className="gallery_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="gallery_taital">Our best Cars</h1>
              </div>
            </div>
            <div className="gallery_section_2">
              <div className="row">
                {(filteredCars.length > 0 ? filteredCars : cars).map((car, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="gallery_box1">
                      <div className="gallery_img"><img src={car.imgSrc} /></div>
                      <h3 className="types_text">{car.brand}</h3>
                      <p className="looking_text">Start per day &#8377;{car.price}</p>
                      <div className="read_bt"><Link to="#">Book Now</Link></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* gallery section end */}
        {/* footer section start */}
      </>
    </div>
  );
}
