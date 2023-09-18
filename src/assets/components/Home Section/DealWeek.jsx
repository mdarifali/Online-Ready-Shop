import React from 'react';
import deal from '../../images/deal_ofthe_week.png';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { useCountdown } from './useCountdown';

const DealWeek = ({targetDate}) => {

    
    const THREE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    targetDate = NOW_IN_MS + THREE_DAYS_IN_MS;
    
    const [days, hours, minutes, seconds] = useCountdown(targetDate);


    

   
    return (
        <div className='container-fluid bg-light mt-5'>
            <div className='container'>
                <div class="mb-3">
                    <div class="row g-0">
                        <div class="col-md-6 d-flex justify-content-center">
                            <img src={deal} class="img-fluid" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body text-end py-5">
                                <h1 class="card-title my-5">Deal Of The Week</h1>
                                <p class="card-text">This is a wider card with supporting text below as a 
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link className='btn btn-dark btn-lg rounded-0' to='/shop'>Shop Now</Link>
                                <div className='mt-5'>
                                    <span className='p-3 bg-dark text-white me-3 fs-5'>{days} D</span>
                                    <span className='p-3 bg-dark text-white me-3 fs-5'>{hours} H</span>:
                                    <span className='p-3 bg-dark text-white me-3 fs-5'>{minutes} M</span>
                                    <span className='p-3 bg-dark text-white fs-5'>{seconds} S</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealWeek;