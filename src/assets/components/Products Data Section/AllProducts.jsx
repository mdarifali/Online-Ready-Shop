import './products.css';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const AllProducts = () => {

    const items = useSelector((state) => state.allCart.products);
    
    return (
        <div className='row g-5'>
            {
                items.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })
            }
        </div>
    );
};

export default AllProducts;