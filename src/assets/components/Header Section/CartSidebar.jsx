import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import {
  decreaseItemQuantity,
  getCartTotal,
  increaseItemQuantity,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CartSidebar = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <>
      {cart.length ? (
        <>
          <div className="row">
            {cart.map((item) => (
              <div
                key={item._id}
                className="col-12 border rounded shadow py-3 mb-3"
              >
                <div className="d-flex justify-content-between">
                  <small className="">{item.name}</small>
                  <div>
                    <button
                      onClick={() => dispatch(removeItem(item._id))}
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src={item.image} className="w-100" />
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <span
                        onClick={() => dispatch(increaseItemQuantity(item._id))}
                        type="button"
                      >
                        <AiOutlinePlus className="fs-4" />
                      </span>
                      <input
                        type="text"
                        value={item.quantity}
                        className="form-control text-center mx-1 rounded-pill border border-info"
                        style={{ width: "60px" }}
                      />
                      <span
                        onClick={() => dispatch(decreaseItemQuantity(item._id))}
                        type="button"
                      >
                        <AiOutlineMinus className="fs-4" />
                      </span>
                    </div>
                  </div>
                  <div className="col-3">
                    <span className="fs-5 fw-bold">${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="mt-5 text-center border rounded p-4">
            <h6 className="">
              Total Quantity:
              <span className="fw-bold"> {totalQuantity}</span>
            </h6>
            <h6 className="">
              Total Price:
              <span className="fw-bold"> ${totalPrice}</span>
            </h6>
          </div>
          <div className="mt-4">
            <Link to="/cart">
              <button
                className="btn btn-dark w-100"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Go Checkout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center mt-5">
          <h5>No Item Added</h5>
          <BsCart3 className="fs-3 text-secondary" />
        </div>
      )}
    </>
  );
};

export default CartSidebar;
