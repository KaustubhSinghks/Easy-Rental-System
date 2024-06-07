import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";

const OurStore = () => {
  return (
    <>
        <Meta />
        <BreadCrumb title="Our Store" />
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shop By Categories
                            </h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop </li>
                                </ul> 
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <h5 className="sub-title">
                                    Availability
                                </h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" checked/>
                                        <label className="form-check-label" htmlFor="">
                                            In Stock(1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label" htmlF or="">
                                            Out of Stock(0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">
                                    Price
                                </h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating">
                                        <input type="number" className="form-control py-1" id="floatingInput1" placeholder="From" />
                                        <label htmlFor="floatingInput1">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="number" className="form-control py-1" id="floatingInput2" placeholder="To" />
                                        <label htmlFor="floatingInput2">To</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">
                                    Colors
                                </h5>
                                <div>
                                    <ul className="colors ps-0">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h5 className="sub-title">
                                    Size
                                </h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-1" />
                                        <label className="form-check-label" htmlFor="">
                                            S(2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-2" />
                                        <label className="form-check-label" htmlFor="">
                                            M(12)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="siz1-3" />
                                        <label className="form-check-label" htmlFor="">
                                            L(8)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="size-4" />
                                        <label className="form-check-label" htmlFor="">
                                            XL(10)
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Product Tags
                            </h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                        Headphone 
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                        TV 
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                        Speaker 
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                        Laptop 
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                        Mobile 
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                        Watches 
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                        Tablet 
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Random Products
                            </h3>
                            <div>
                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                    </div>
                                    <div className="w-25">
                                        <h5>
                                            Kids watches bulk 10 pack multi-coloured for students
                                        </h5>
                                        <ReactStars count={5} size={10} value={3.5} isHalf={true} edit={false} activeColor="#ffd700" /> 
                                        <p></p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">

                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default OurStore;
