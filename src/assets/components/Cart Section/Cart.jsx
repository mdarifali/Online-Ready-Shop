import "./cart.css";
import noImage from "../../images/no-image.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsXLg } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import {
  FaArrowRight,
  FaArrowLeft,
  FaAngleDown,
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
            <div class="card-body p-4">
              <div class="row">
                <div class="col-lg-7">
                    <Link to="/shop" class="text-dark nav-link mb-4">
                      <FaArrowLeft className="fs-4" />{" "}
                      <span>Continue Shopping</span>
                    </Link>

                  <hr />

                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-none d-xl-block d-lg-block">
                      <p>Shopping Cart</p>
                    </div>
                    <div>
                      <p>
                        Total Cart Items:{" "}
                        <span className="fw-bold">{cart.length}</span>
                      </p>
                    </div>
                  </div>

                  {cart.map((data) => (
                    <div class="card mb-4 shadow">
                      <div class="card-body">
                          <div class="d-flex flex-row align-items-center">
                            <div className="col-md-4 col-lg-4 col-xl-4">
                              <div className="text-center">
                                <img
                                  src={data.image}
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: "80px" }}
                                />
                                <div>
                                  <span>{data.name}</span>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-4 col-lg-4 col-xl-4 col-6">
                              <div className="d-flex justify-content-center align-items-center">
                                <button
                                  class="btn btn-transparent"
                                  onClick={() =>
                                    dispatch(decreaseItemQuantity(data._id))
                                  }
                                >
                                  <AiOutlineMinusCircle className="fs-4" />
                                </button>

                                <input
                                  id="form1"
                                  name="quantity"
                                  value={data.quantity}
                                  type="text"
                                  class="form-control text-center"
                                  style={{ width: "50px" }}
                                />

                                <button
                                  class="btn btn-transparent"
                                  onClick={() =>
                                    dispatch(increaseItemQuantity(data._id))
                                  }
                                >
                                  <AiOutlinePlusCircle className="fs-4" />
                                </button>
                              </div>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 text-center">
                              <span class="mb-0">$ {data.price}</span>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2">
                              <button
                                className="btn"
                                onClick={() => dispatch(removeItem(data._id))}
                              >
                                <BsXLg className="delete-hover" />
                              </button>
                            </div>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div class="col-lg-5">
                  <div class="card bg-secondary text-white rounded-3">
                    <div class="card-body shadow">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Card details</h5>
                          <img
                            src={user ? user.photoURL : noImage }
                            class="img-fluid rounded-circle"
                            style={{ width: "50px" }}
                            alt="user image"
                          />
                      </div>

                      <div className="text-center">
                        <p>Select Card Type</p>
                        <a href="#!" type="submit">
                          <FaCcMastercard className="me-3 fs-1 text-light" />
                        </a>
                        <a href="#!" type="submit">
                          <FaCcVisa className="me-3 fs-1 text-light" />
                        </a>
                        <a href="#!" type="submit">
                          <FaCcAmex className="me-3 fs-1 text-light" />
                        </a>
                        <a href="#!" type="submit">
                          <FaCcPaypal className="fs-1 text-light" />
                        </a>
                      </div>

                      <form class="mt-4">
                        <div class="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeName"
                            class="form-control form-control-lg"
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
                            class="form-control form-control-lg"
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
                                class="form-control form-control-lg"
                                placeholder="MM/YYYY"
                                size="7"
                                minLength="7"
                                maxLength="7"
                              />
                              <label
                                class="form-label"
                                id="typeExp"
                                htmlFor="typeExp"
                              >
                                Expiration
                              </label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-outline form-white">
                              <input
                                type="password"
                                id="typeText1"
                                class="form-control form-control-lg"
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
                        class="btn btn-info btn-block btn-lg  w-100"
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
