import { BsHouse, BsSpeedometer2, BsTable, BsGrid, BsPeople } from 'react-icons/bs';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-dark min-vh-100">
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <Link to="/dashboard/profile" className="nav-link align-middle px-0 text-light">
                                    <BsHouse className='fs-2' /> <span className="ms-1 d-none d-sm-inline">My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/order' className="nav-link px-0 align-middle text-light">
                                    <BsSpeedometer2 className='fs-3' /> <span className="ms-1 d-none d-sm-inline">My Orders</span> </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/add-product" className="nav-link px-0 align-middle text-light">
                                    <BsTable className='fs-4'/>
                                    <span className="ms-1 d-none d-sm-inline">Add Product</span>
                                </Link>
                            </li>

                            <li>
                                <a href="#submenu3" className="nav-link px-0 align-middle text-light">
                                    <BsGrid className='fs-3' /><span className="ms-1 d-none d-sm-inline">Products</span></a>
                            </li>
                            <li>
                                <a href="/" className="nav-link px-0 align-middle text-white">
                                    <BsPeople className='fs-3' /> <span className="ms-1 d-none d-sm-inline">Add User</span> </a>
                            </li>
                            <li>
                                {/* <button onClick={logout} className="px-0 align-middle btn text-danger">
                                    <RiLogoutCircleLine className='fs-2'/> 
                                    <span className="ms-1 d-none d-sm-inline">Logout</span>
                                </button> */}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;