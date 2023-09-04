import React from "react";
import {
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiHeartFill,
} from "react-icons/ri";
import app1 from "../../images/app.png";
import app2 from "../../images/app2.png";
import payment from "../../images/payment-method.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid p-0 bg-dark">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-4 col-12 mb-5 mb-xl-0 mb-lg-0 mb-md-0">
            <Link class="nav-link text-white" to="/">
              READY<span className="text-info">SHOP</span>
            </Link>
            <div className="mt-3 text-muted">
              <small>Address: 60-49 Road 11378</small>
              <br />
              <small>New York</small>
              <br />
              <small>Phone: +65 11.188.888</small>
              <br />
              <small>Email: hello.colorlib@gmail.com</small>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12  mb-5 mb-xl-0 mb-lg-0 mb-md-0">
            <div className="text-start text-xl-center text-lg-center text-md-center">
              <span className="text-white">Menu Items</span>
              <div className="navbar-dark ">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      News
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/blogs">
                      Blog
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12 ">
            <div className="text-start text-xl-end text-lg-end text-md-end">
              <p className="text-light">Download App</p>
              <div className="mb-2">
                <Link to="#">
                  <img
                    src={app1}
                    alt=""
                    style={{ width: "100px", height: "auto" }}
                  />
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src={app2}
                    alt=""
                    style={{ width: "100px", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-12">
            <p className="text-info text-center text-xl-start text-lg-start text-md-start">
              ©2023 All Rights Reserverd. Made with by
              <RiHeartFill className="text-danger fs-5" />
              <span className="text-danger">Md Arif</span>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-3 mb-xl-0 mb-lg-0 mb-md-0">
            <div className="text-center text-xl-end text-lg-end text-md-end">
              <img src={payment} alt="payment-image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center bg-light text-danger py-3">
        <a class="nav-link me-4" to="#">
          <RiFacebookFill className="fs-4" />
        </a>
        <a class="nav-link me-4" to="#">
          <RiTwitterFill className="fs-4" />
        </a>
        <a class="nav-link me-4" to="#">
          <RiInstagramFill className="fs-4" />
        </a>
        <a class="nav-link me-4" to="/">
          <RiYoutubeFill className="fs-4" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
