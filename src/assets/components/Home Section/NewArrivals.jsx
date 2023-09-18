import './home.css';
import Women from '../Products Data Section/Women';
import Men from '../Products Data Section/Men';
import Accessories from '../Products Data Section/Accessories';

const NewArrivals = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center mb-5'>New Arrivals</h2>
            <ul class="nav nav-tabs justify-content-between justify-content-lg-center justify-content-xl-center justify-content-md-center" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link p-1 p-xl-3 p-lg-3 p-md-3 active" id="men-tab" data-bs-toggle="tab" data-bs-target="#men" type="button" role="tab" aria-controls="men" aria-selected="false">
                        <span className='text-danger'>MEN'S</span>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link p-1 p-xl-3 p-lg-3 p-md-3" id="women-tab" data-bs-toggle="tab" data-bs-target="#women" type="button" role="tab" aria-controls="women" aria-selected="false">
                        <span className='text-danger'>WOMEN'S</span>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link p-1 p-xl-3 p-lg-3 p-md-3" id="accessories-tab" data-bs-toggle="tab" data-bs-target="#accessories" type="button" role="tab" aria-controls="accessories" aria-selected="false">
                        <span className='text-danger'>ACCESSORIES</span>
                    </button>
                </li>
            </ul>
            <div class="tab-content mt-5" id="myTabContent">
                <div class="tab-pane fade" id="men" role="tabpanel" aria-labelledby="men-tab">
                    <Men />
                </div>
                <div class="tab-pane fade" id="women" role="tabpanel" aria-labelledby="women-tab">
                    <Women />
                </div>
                <div class="tab-pane fade" id="accessories" role="tabpanel" aria-labelledby="accessories-tab">
                    <Accessories />
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;