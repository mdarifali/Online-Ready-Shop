import Swal from "sweetalert2";
import "./header.css";
import CartSidebar from "./CartSidebar";
import { BiSearchAlt, BiUser, BiCartAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebaseConfig";
import { useSelector } from "react-redux";


const MainNavber = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.allCart);

  const handleLogout = () => {
    signOut(auth)
      .then((result) => {
        Swal.fire("User", "Logout Successful", "success");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="">
      <nav class="navbar navbar-expand-lg bg-white shadow">
        <div class="container">
          <Link class="nav-link" to="/">
            READY<span className="text-info">SHOP</span>
          </Link>
          <button
            class="navbar-toggler order-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav m-auto fw-bold">
              <Link class="link-hover" to="/">
                <small>HOME</small>
              </Link>
              <Link class="link-hover" to="/shop">
                <small>SHOP</small>
              </Link>
              <Link class="link-hover" to="/blogs">
                <small>BLOG</small>
              </Link>
              <Link class="link-hover" to="/contact">
                <small>CONTACT</small>
              </Link>
            </div>
          </div>
          <div class="d-flex order-2 dropdown-center align-items-center">
            <a
              class="nav-link text-dark"
              to="#"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <BiSearchAlt className="fs-5 me-2 me-lg-5 me-md-5 me-xl-5" />
            </a>
            <a
              class="nav-link text-dark"
              to="#"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BiUser className="fs-5 me-2 me-lg-5 me-md-5 me-xl-5" />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-sm-start"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <Link class="dropdown-item" to="/dashboard">
                  My Dashboard
                </Link>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={handleLogout}
                    class="dropdown-item active btn"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link class="dropdown-item active" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <a
              type="button"
              class="position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <BiCartAlt className="fs-5 text-dark" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </a>
          </div>
        </div>
      </nav>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">My Cart</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <CartSidebar/>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasTopLabel">Search Items</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="search"
              className="form-control w-25 me-1"
              placeholder="search  items"
              name="search"
            />
            <div>
              <BiSearchAlt className="fs-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavber;
