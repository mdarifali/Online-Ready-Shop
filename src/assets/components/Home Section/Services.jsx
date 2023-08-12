import React from 'react';
import { RiTruckLine } from 'react-icons/ri'
import { FaMoneyBillAlt, FaUndoAlt, FaRegClock } from 'react-icons/fa'

const Services = () => {
    return (
        <div className='container'>
            <div className="row p-5">
                <div className="col-lg-3 border-2 border-light border-end mb-3 mb-lg-0" style={{backgroundColor: "#ecf0f1"}}>
                    <div className="row align-items-center py-4 py-lg-3">
                        <div className='col-2'>
                            <RiTruckLine className='text-danger fs-2' />
                        </div>
                        <div className='col-10'>
                            <h6 className='fw-bold'>FREE SHIPPING</h6>
                            <small>Suffered Alteration in Some Form</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 border-2 border-light border-end mb-3 mb-lg-0" style={{backgroundColor: "#ecf0f1"}}>
                    <div className="row align-items-center py-4 py-lg-3">
                        <div className='col-2'>
                            <FaMoneyBillAlt className='text-danger fs-2' />
                        </div>
                        <div className='col-10'>
                            <h6 className='fw-bold'>CASH ON DELIVERY</h6>
                            <small>The Internet Tend To Repeat</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 border-2 border-light border-end mb-3 mb-lg-0" style={{backgroundColor: "#ecf0f1"}}>
                    <div className="row align-items-center  py-4 py-lg-3">
                        <div className='col-2'>
                            <FaUndoAlt className='text-danger fs-3' />
                        </div>
                        <div className='col-10'>
                            <h6 className='fw-bold'>45 DAYS RETURN</h6>
                            <small>Making it Look Like Readable</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 border-2 border-light border-end" style={{backgroundColor: "#ecf0f1"}}>
                    <div className="row align-items-center  py-4 py-lg-3">
                        <div className='col-2'>
                            <FaRegClock className='text-danger fs-3' />
                        </div>
                        <div className='col-10'>
                            <h6 className='fw-bold'>OPENING ALL WEEK</h6>
                            <small>8AM - 09PM</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services