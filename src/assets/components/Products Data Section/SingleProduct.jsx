import './products.css';
import { BsTruck } from "react-icons/bs";
import review1 from '../../images/Review-1.jpg';
import review2 from '../../images/Review-2.jpg';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";
import { useState, useEffect } from 'react';
import Services from '../Home Section/Services';
import NewsLetter from '../Home Section/NewsLetter';
import { useParams } from 'react-router-dom';


const SingleProduct = () => {

    const { id } = useParams();
     
    const [products, setProducts] = useState([]);
    const {image, name, price, category, description} = products

    useEffect(() => {

        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => { setProducts(data) 
            });

    }, [id]);

    // const [changeImage, setChangeImage] = useState(images[0])

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(parseInt(count) + 1);
    }

    const deincrement = () => {
        setCount(parseInt(count) - 1);
    }


    return (
        <>
            <div className='container my-5'>
                <div className="row mb-5">
                    <div className="col-lg-6">
                        <div className='row'>
                            <div className="col-lg-3 col-md-3 order-lg-1 order-md-1 order-2 mt-4 mt-lg-0">
                                <div className='row flex-lg-column flex-md-column'>
                                    {/* {
                                        image.map((img, index) => {
                                            return (
                                                <div className='col mb-4' key={index}>
                                                    <img src={img} alt=""
                                                        onClick={() => setChangeImage(img)}
                                                        className='w-100'
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                </div>
                                            )
                                        })
                                    } */}
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 order-lg-2 order-md-2 order-1">
                                <img src={image} alt="product" className='w-100' />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0 mt-md-0">
                        <div className='w-100'>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                        <div className='p-3 bg-light d-flex flex-row align-items-center justify-content-center' style={{ marginTop: '60px' }}>
                            <span><BsTruck className='fs-4 me-4' /></span>
                            <span className='text-danger fw-bolder'>FREE DELIVERY</span>
                        </div>
                        <div className='mt-5'>
                            <h4 className='text-danger fw-bolder me-4'>${price}</h4>
                            <div className='d-inline pt-3'>
                                <span>
                                    <TiStarFullOutline className='fs-5 text-warning' />
                                </span>
                                <span>
                                    <TiStarFullOutline className='fs-5 text-warning' />
                                </span>
                                <span>
                                    <TiStarFullOutline className='fs-5 text-warning' />
                                </span>
                                <span>
                                    <TiStarHalfOutline className='fs-5 text-warning' />
                                </span>
                                <span>
                                    <TiStarOutline className='fs-5 text-warning' />
                                </span>
                            </div>
                        </div>
                        <div className='mt-4 d-flex flex-row align-items-center'>
                            <span className='me-3'>Select Color:</span>
                            <select class="form-select w-25">
                                <option value="1">Red</option>
                                <option value="2">White</option>
                                <option value="3">Yellow</option>
                            </select>
                        </div>
                        <div className='mt-4 d-flex flex-row align-items-center'>
                            <span className='me-2'>Quantity:</span>
                            <div className='d-flex flex-row align-items-center'>
                                <button onClick={increment} className='btn'><AiOutlinePlusCircle className='fs-5' /></button>
                                <input type="text" value={count} className='form-control text-center' style={{ width: '50px' }} />
                                <button onClick={deincrement} className='btn'><AiOutlineMinusCircle className='fs-5' /></button>
                            </div>
                        </div>
                        <button className='btn btn-danger rounded-0 mt-5'>ADD TO CART</button>
                    </div>
                </div>
                <hr />
                <div className='mt-5'>
                    <div className="row">
                        <div className="col">
                            <div className='my-4 d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center'>
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Additional Information</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content mt-5" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className='fs-5 mb-5 d-inline-flex border-bottom border-info border-2'>Description</div>
                                    <div className='my-5'>
                                        <h3>Pocket cotton sweatshirt</h3>
                                        <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                                    </div>
                                    <img src={image} alt="" className='my-5 img-fluid' />
                                    <div className='my-5'>
                                        <h3>Pocket cotton sweatshirt</h3>
                                        <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 offset-md-2 offset-lg-2">
                                    <div>
                                        <img src={image} alt="" className='my-5 img-fluid' />
                                        <div className='my-5'>
                                            <h3>Pocket cotton sweatshirt</h3>
                                            <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                                        </div>
                                        <img src={image} alt="" className='my-5 img-fluid' />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <Services />
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className='fs-5 mb-5 d-inline-flex border-bottom border-info border-2'>Additional Information</div>
                            <div className='my-5'>
                                <h3 className='mb-4'>Pocket cotton sweatshirt</h3>
                                <p>Color: Gold, Red</p>
                                <p>Size: XL, XXL, L</p>
                            </div>
                            <hr />
                            <Services />
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className='fs-5 mb-5 d-inline-flex border-bottom border-info border-2'>Reviews(2)</div>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6">
                                    <div className='row'>
                                        <div className='col-4 d-flex flex-column'>
                                            <img src={review1} alt="" className='w-100' />
                                            <div className='d-inline pt-3 text-center'>
                                                <span>
                                                    <TiStarFullOutline className='fs-5 text-warning' />
                                                </span>
                                                <span>
                                                    <TiStarFullOutline className='fs-5 text-warning' />
                                                </span>
                                                <span>
                                                    <TiStarFullOutline className='fs-5 text-warning' />
                                                </span>
                                                <span>
                                                    <TiStarHalfOutline className='fs-5 text-warning' />
                                                </span>
                                                <span>
                                                    <TiStarOutline className='fs-5 text-warning' />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <span className='fw-bold'>27 Jan 2023</span>
                                            <p>Brandon William</p>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, in.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-5'>
                                        <div className='col-4 d-flex flex-column'>
                                            <img src={review2} alt="" className='w-100' />
                                            <div className='d-inline pt-3 text-center'>
                                                <span>
                                                    <TiStarFullOutline className='fs-5 text-warning' />
                                                </span>
                                                <span>
                                                    <TiStarFullOutline className='fs-5 text-warning' />
                                                </span>
                                                <span>
                                                    <TiStarFullOutline className='fs-5 text-warning' />
                                                </span>
                                                <span>
                                                    <TiStarHalfOutline className='fs-5 text-warning' />
                                                </span>
                                                <span>
                                                    <TiStarOutline className='fs-5 text-warning' />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <span className='fw-bold'>27 Jan 2023</span>
                                            <p>Brandon William</p>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, in.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mt-5 mt-lg-0 mt-md-0">
                                    <div>
                                        <p className='mb-4 fw-bold'>Add Review</p>
                                        <input type="text" placeholder='Name*' required className='form-control mb-4' />
                                        <input type="text" placeholder='Email*' required className='form-control' />
                                    </div>
                                    <div className='mt-5'>
                                        <p className='mb-4 fw-bold'>Your Rating:</p>
                                        <textarea className='form-control' rows="5" placeholder='Your Review'></textarea>
                                    </div>
                                    <button className='btn btn-danger mt-4 float-end px-5 py-2 rounded-0'>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter />
        </>
    );
};

export default SingleProduct;