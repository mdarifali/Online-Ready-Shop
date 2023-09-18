import { Link } from "react-router-dom";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../../redux/features/cart/cartSlice";

const Men = () => {
  const product = useSelector((state) => state.allCart.products);
  const men = product.filter((item) => item.category === "Men");
  const dispatch = useDispatch();

  return (
    <div className="row g-5">
      {men.map((product) => {
        return (
          <>
            <div className="col-md-4 col-lg-3 col-6 col-ex-sm">
              <div class="card-main">
                <img src={product.image} class="w-100" alt="product Image" />
                <div className="card-details">
                  <Link to={`/single-porduct/${product._id}`} class="nav-link">
                    <div className="text-light">
                      <h6>{product.name}</h6>
                      <small>{product.description.slice(0, 90)}...</small>
                    </div>
                  </Link>
                  <button
                    onClick={() => dispatch(handleAddToCart(product))}
                    className="btn btn-danger btn-sm w-100 mt-5"
                  >
                    Add to Cart
                  </button>
                </div>
                <div class="text-center">
                  <p class="card-title">{product.name}</p>
                  <span class="card-text fw-bolder">${product.price}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Men;
