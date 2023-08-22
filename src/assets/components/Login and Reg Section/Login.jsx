import React from 'react';
import Swal from 'sweetalert2';
import login from '../../images/login.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebaseConfig';
import SocialLogin from './socialLogin';



const Login = () => {

    const auth = getAuth(app)
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';

    const handleSubmit = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const singInUser = result.user;
                console.log(singInUser, 'Login Success');
                Swal.fire(
                    `Hello! ${singInUser.displayName}`,
                    'Login Successful',
                    'success'
                )
                navigate(form);
            })
            .catch(error => {
                console.log(error.message, 'Login Faild');
                Swal.fire({
                    icon: 'error',
                    title: 'Login Faild',
                    text: `${error.message}`
                  })
            })

    }


    return (
        <div class="vh-100">
            <div class="container my-5">
                <div class="row">
                    <div class="col-sm-6 text-black bg-light">
                        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                            <form onSubmit={handleSubmit} style={{ width: "23rem" }}>
                                <h3 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log in</h3>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example18" class="form-control form-control-lg" placeholder='Email'
                                        required name='email'
                                    />
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example28" class="form-control form-control-lg" placeholder='Password'
                                        required name='password'
                                    />
                                </div>

                                <div class="pt-1 mb-4">
                                    <button class="btn btn-info btn-lg rounded-0 w-100" type="submit">Sing In</button>
                                </div>
                                <SocialLogin />
                                <div className='text-center'>
                                    <p class="small mb-3 pb-lg-2"><Link class="text-muted" to="#">Forgot password?</Link></p>
                                    <Link to="/register" class="nav-link">Don't have an account?
                                        <span className='text-danger'>Register here</span>
                                    </Link>

                                </div>

                            </form>
                        </div>

                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src={login}
                            alt="Login image" class="w-100 vh-100 opacity-75" style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;