import useHook from '../Use Hooks/useHook';
import './products.css';
import { Link } from 'react-router-dom';

const Accessories = () => {

    const [products] = useHook()
    const accessories = products.filter(item => item.category === 'Accessories');

    return (
        <div className='row g-5'>
            {
                accessories.map((product) => {

                    return <div className="col-md-4 col-lg-3 col-6 col-ex-sm">
                        <div class="card card-body-hover">
                            <Link to={`/single-porduct/${product._id}`} class="nav-link">
                                <img src={product.image} class="card-img-top card-img" alt="product Image" />
                                <div class="card-body text-center">
                                    <p class="card-title">{product.name}</p>
                                    <span class="card-text fw-bolder">${product.price}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Accessories;