import { useEffect, useState } from 'react';

const useHook = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/product'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return [products, setProducts];
};

export default useHook;