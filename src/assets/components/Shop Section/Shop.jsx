import './shop.css';
import Services from '../Home Section/Services';
import NewsLetter from '../Home Section/NewsLetter';
import { Link, Outlet } from 'react-router-dom';

const Shop = () => {

    return (
        <>
            <div className='container my-5'>
                <div className="row gx-5">
                    <div className="col col-lg-2 col-md-2 order-lg-1 order-md-1 order-2">
                        <p className='fw-bold'>Category</p>
                        <ul className='nav flex-column my-4'>
                            <li className='hover-class'>
                                <Link to="/shop/men" className='nav-link text-dark px-2'>Men</Link>
                            </li>
                            <li className='hover-class'>
                                <Link to="/shop/women" className='nav-link text-dark px-2'>Women</Link>
                            </li>
                            <li className='hover-class'>
                                <Link to="/shop/accessories" className='nav-link text-dark px-2'>Accessories</Link>
                            </li>
                            <li className='hover-class'>
                                <Link to="#" className='nav-link text-dark px-2'>New Arrivals</Link>
                            </li>
                            <li className='hover-class'>
                                <Link to="#" className='nav-link text-dark px-2'>Collection</Link>
                            </li>
                        </ul>
                        <hr />
                        <div className='my-5'>
                            <p className='fw-bold mb-5'>Price</p>
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
                    <div className="col col-lg-10 col-md-10 order-lg-2 order-md-2 order-1">
                        <Outlet />
                        <div className='my-5 float-end'>
                            <ul class="pagination text-dark">
                                <li class="page-item"><a class="page-link text-dark" to="#">Previous</a></li>
                                <li class="page-item"><a class="page-link text-danger" to="#">1</a></li>
                                <li class="page-item"><a class="page-link text-danger" to="#">2</a></li>
                                <li class="page-item"><a class="page-link text-danger" to="#">3</a></li>
                                <li class="page-item"><a class="page-link text-dark" to="#">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Services />
            </div>
            <NewsLetter />
        </>
    );
};

export default Shop;