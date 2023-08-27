import './products.css';
import ProductCard from './ProductCard';
import useHook from '../Use Hooks/useHook';

const AllProducts = () => {

    const [products] = useHook()
    
    return (
        <div className='row g-5'>
            {
                products.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })
            }
        </div>
    );
};

export default AllProducts;