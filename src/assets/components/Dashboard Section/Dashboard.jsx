import { BsPersonVideo, BsBagCheck, BsClipboardPlus, BsClipboardMinus, BsPeople } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-dark min-vh-100">
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item mb-2">
                                <Link to="/dashboard/profile" className="nav-link align-items-center px-0 text-light">
                                    <BsPersonVideo className='fs-3' /> <span className="ms-1 d-none d-sm-inline">My Profile</span>
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to='/dashboard/order' className="nav-link px-0 align-items-center text-light">
                                    <BsBagCheck className='fs-3' />
                                    <span className="ms-1 d-none d-sm-inline">My Orders</span>
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/dashboard/add-product" className="nav-link px-0 align-items-center text-light">
                                    <BsClipboardPlus className='fs-3'/>
                                    <span className="ms-1 d-none d-sm-inline">Add Product</span>
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/dashboard/manage-product" className="nav-link px-0 align-items-center text-light">
                                    <BsClipboardMinus className='fs-3' />
                                    <span className="ms-1 d-none d-sm-inline">Manage Product</span>
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/dashboard/manage-user" className="nav-link px-0 align-items-center text-white">
                                    <BsPeople className='fs-3' />
                                    <span className="ms-1 d-none d-sm-inline">Manage User</span>
                                </Link>
                            </li>
                            <li>
                                {/* <button onClick={logout} className="px-0 align-items-center btn text-danger">
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