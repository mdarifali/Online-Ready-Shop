import { Link } from 'react-router-dom';
import useHook from '../Use Hooks/useHook';
import './products.css';

const Women = () => {

    const [products] = useHook()
    const women = products.filter(item => item.category === 'Women');

    return (
        <div className='row g-5'>
            {
                women.map((product) => {

                    return <div className="col-md-4 col-lg-3 col-6 col-ex-sm">
                        <div class="card card-body-hover">
                            <Link to={`/single-porduct/${product._id}`} class="nav-link">
                                <img src={product.image} class="card-img-top card-img" alt="product Image" />
                                <div class="card-body">
                                    <p class="card-title">{product.name}</p>
                                    <span class="card-text text-danger fw-bolder">${product.price}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Women;