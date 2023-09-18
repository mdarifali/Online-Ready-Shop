import noImage from "../../images/no-image.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCcPaypal,
} from "react-icons/fa";
import app from "../../firebase/firebaseConfig";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCartTotal,
  increaseItemQuantity,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import { useAuthState } from "react-firebase-hooks/auth";

const Cart = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <div class="container my-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-7 mb-5 mb-xl-0 mb-lg-0 mb-md-0">
                  <Link to="/shop" class="text-dark nav-link mb-4">
                    <FaArrowLeft className="fs-4" />{" "}
                    <span>Continue Shopping</span>
                  </Link>

                  <hr />

                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-none d-xl-block d-lg-block d-md-block">
                      <p>Shopping Cart</p>
                    </div>
                    <div>
                      <p>
                        Total Items:{" "}
                        <span className="fw-bold">{cart.length}</span>
                      </p>
                    </div>
                  </div>

                  <div className="row px-2">
                    {cart.map((item) => (
                      <div
                        key={item._id}
                        className="col-12 border shadow py-3 mb-4"
                      >
                        <div className="d-flex justify-content-between">
                          <small className="fw-bold">{item.name}</small>
                          <div>
                            <button
                              onClick={() => dispatch(removeItem(item._id))}
                              type="button"
                              class="btn-close"
                              aria-label="Close"
                            ></button>
                          </div>
                        </div>
                        <hr />
                        <div className="row align-items-center">
                          <div className="col-3">
                            <img src={item.image} className="w-100" />
                          </div>
                          <div className="col-6">
                            <div className="d-flex flex-row align-items-center justify-content-center">
                              <span
                                onClick={() =>
                                  dispatch(increaseItemQuantity(item._id))
                                }
                                type="button"
                              >
                                <AiOutlinePlusCircle className="fs-4" />
                              </span>
                              <input
                                type="text"
                                value={item.quantity}
                                className="form-control text-center mx-1 rounded-pill border border-info"
                                style={{ width: "60px" }}
                              />
                              <span
                                onClick={() =>
                                  dispatch(decreaseItemQuantity(item._id))
                                }
                                type="button"
                              >
                                <AiOutlineMinusCircle className="fs-4" />
                              </span>
                            </div>
                          </div>
                          <div className="col-3 text-center p-0">
                            <span className="fw-bolder text-danger">${item.price}</span>
                            <p className="d-none d-xl-block d-lg-block d-md-block">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div class="col-lg-5">
                  <div class="card bg-secondary text-white rounded-3">
                    <div class="card-body shadow">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Card details</h5>
                        <img
                          src={user.photoURL ? user.photoURL : noImage}
                          class="img-fluid rounded-circle"
                          style={{ width: "50px" }}
                          alt="user image"
                        />
                      </div>

                      <div className="text-center">
                        <p>Select Card Type</p>
                        <div>
                          <a href="#!">
                            <FaCcMastercard className="me-3 fs-1 text-light" />
                          </a>
                          <a href="#!">
                            <FaCcVisa className="me-3 fs-1 text-light" />
                          </a>
                          <a href="#!">
                            <FaCcAmex className="me-3 fs-1 text-light" />
                          </a>
                          <a href="#!">
                            <FaCcPaypal className="fs-1 text-light" />
                          </a>
                        </div>
                      </div>
                      <hr />
                      <form class="mt-4">
                        <div class="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeName"
                            class="form-control"
                            siez="17"
                            placeholder="Cardholder's Name"
                          />
                          <label class="form-label" htmlFor="typeName">
                            Cardholder's Name
                          </label>
                        </div>

                        <div class="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeText"
                            class="form-control"
                            siez="17"
                            placeholder="1234 5678 9012 3457"
                            minLength="19"
                            maxLength="19"
                          />
                          <label class="form-label" htmlFor="typeText">
                            Card Number
                          </label>
                        </div>

                        <div class="row mb-4">
                          <div class="col-md-6">
                            <div class="form-outline form-white">
                              <input
                                type="text"
                                id="typeExp"
                                class="form-control"
                                placeholder="mm/yyyy"
                              />
                              <label
                                class="form-label"
                                id="typeExp"
                                htmlFor="typeExp"
                              >
                                Expiration Date
                              </label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-outline form-white">
                              <input
                                type="password"
                                id="typeText1"
                                class="form-control"
                                placeholder="cvv number"
                                size="1"
                                minLength="3"
                                maxLength="3"
                              />
                              <label class="form-label" htmlFor="typeText1">
                                CVV
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>

                      <hr class="my-4" />

                      <div class="d-flex justify-content-between">
                        <p class="mb-2">Total Quantity</p>
                        <p class="mb-2">{totalQuantity}</p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <p class="mb-2">Subtotal</p>
                        <p class="mb-2">${totalPrice}</p>
                      </div>

                      {/* <div class="d-flex justify-content-between">
                        <p class="mb-2">Shipping</p>
                        <p class="mb-2">$20.00</p>
                      </div> */}

                      <div class="d-flex justify-content-between mb-4">
                        <p class="mb-2">Total(Incl. taxes)</p>
                        <p class="mb-2">${totalPrice}</p>
                      </div>

                      <button
                        type="button"
                        class="btn btn-info btn-block w-100"
                      >
                        <div class="d-flex justify-content-between text-light">
                          <span>${totalPrice}</span>
                          <span>
                            Checkout
                            <FaArrowRight className="ms-1" />
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
