import React from 'react';
import profile from '../../images/Review-1.jpg';

const MyProfile = () => {
    return (
        <div className='container my-5'>
            <div className='text-center'>
                <h1 className='mb-5 d-inline-flex border-bottom border-info border-3'>Profile Details</h1>
            </div>
            <div className="row gx-5 mt-5">
                <div className="col-lg-6">
                    <div class="card rounded-0 p-5 border-0 bg-light">
                        <img src={profile} class="rounded-circle m-auto mt-4" alt="..." style={{ height: '100px', width: '100px' }} />
                        <h6 className='fw-bold text-center my-4'>Brandon William</h6>
                        <hr />
                        <div className="row mt-5">
                            <div className="col">
                                <div class="card-body text-muted">
                                    <p>Gender: </p>
                                    <p>Phone: </p>
                                    <p>Email: </p>
                                    <p>Date of Birth: </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-body text-muted">
                                    <p>Male</p>
                                    <p>01700-000000</p>
                                    <p>user@gmail.com</p>
                                    <p>01/01/0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="card rounded-0 p-5 border-0 bg-light">
                        <form className='w-100'>
                            <div class="form-outline mb-4">
                                <input type="text" id="form2Example18" class="form-control " placeholder='First Name' required />
                            </div>

                            <div class="form-outline mb-4">
                                <input type="text" id="form2Example18" class="form-control" placeholder='Last Name' required />
                            </div>

                            <div class="form-outline mb-4">
                                <input type="email" id="form2Example28" class="form-control" placeholder='Email' required />
                            </div>

                            <div class="form-outline mb-4">
                                <input type="number" id="form2Example28" class="form-control" placeholder='Phone' required />
                            </div>

                            <div class="form-outline mb-4">
                                <input type="file" id="form2Example28" class="form-control" required />
                            </div>

                            <div class="pt-1 mb-4">
                                <button class="btn btn-success btn-lg rounded-0 w-100" type="submit">Update Now</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;