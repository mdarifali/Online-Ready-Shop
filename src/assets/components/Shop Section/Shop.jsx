import React from 'react';
import AllProducts from '../Products Data Section/AllProducts';
import Services from '../Home Section/Services';

const Shop = () => {

    return (
        <div className='container my-5'>
            <div className="row gx-5">
                <div className="col-3 col-lg-2 col-md-2">
                    <p className='fw-bold'>Product Category</p>
                    <ul className='nav flex-column my-4'>
                        <li className='nav-item'>
                            <a href="" className='nav-link text-dark px-0'>Men</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className='nav-link text-dark px-0'>Women</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className='nav-link text-dark px-0'>Accessories</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className='nav-link text-dark px-0'>New Arrivals</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className='nav-link text-dark px-0'>Collection</a>
                        </li>
                    </ul>
                    <hr />
                    <div className='my-5'>
                        <p className='fw-bold mb-5'>Filter by Price</p>
                        <p className='fw-bold text-danger'>$0 - $580</p>
                        <input type="range" class="form-range" min="0" max="580" id="customRange2"></input>
                        <button className='btn btn-dark rounded-0 btn-sm mt-3 px-5'>FILTER</button>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <p className='fw-bold mb-5'>Sizes</p>
                        <div class="form-check mb-3">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">S</label>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">M</label>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">L</label>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">XL</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">XXL</label>
                        </div>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <p className='fw-bold mb-5'>Colors</p>
                        <div class="form-check mb-3">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">Black</label>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">Red</label>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">White</label>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">Pink</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">Blue</label>
                        </div>
                    </div>
                </div>
                <div className="col-9 col-lg-10 col-md-10">
                    <div className='row mb-5'>
                        <div className="col-3">
                            <select class="form-select">
                                <option selected>Default Sorting</option>
                                <option value="1">Price</option>
                                <option value="2">Product Name</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select class="form-select">
                                <option selected>2</option>
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                    </div>
                    <AllProducts />
                    <div className='my-5 float-end'>
                        <ul class="pagination text-dark">
                            <li class="page-item"><a class="page-link text-dark" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link text-danger" href="#">1</a></li>
                            <li class="page-item"><a class="page-link text-danger" href="#">2</a></li>
                            <li class="page-item"><a class="page-link text-danger" href="#">3</a></li>
                            <li class="page-item"><a class="page-link text-dark" href="#">Next</a></li>
                        </ul>
                    </div>
                </div>
                <Services />
            </div>
        </div>
    );
};

export default Shop;