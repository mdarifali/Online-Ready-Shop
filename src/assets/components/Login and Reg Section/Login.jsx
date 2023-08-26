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
        <div class="">
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-6 col-12 text-dark" style={{ backgroundColor: '#ecf0f1' }}>
                        <div class="p-0 p-xl-5 p-lg-5 p-md-5">

                            <form onSubmit={handleSubmit}>
                                <h5 class="text-center my-5">Log in</h5>

                                <SocialLogin />

                                <div className='mb-4 text-center'>
                                    <span>or</span>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example18" class="form-control form-control-lg" required name='email'/>
                                    <label class="form-label" htmlFor="form2Example18">User Email</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example8" class="form-control form-control-lg" required name='password'/>
                                    <label class="form-label" htmlFor="form2Example8">User Password</label>
                                </div>

                                <div class="pt-1 mb-4">
                                    <button class="btn btn-danger btn-lg rounded-0 w-100" type="submit">Sing In</button>
                                </div>

                                <div className='text-center pb-5'>
                                    <p class="small mb-3 pb-lg-2"><Link class="text-muted" to="#">Forgot password?</Link></p>
                                    <Link to="/register" class="nav-link">Don't have an account?
                                        <span className='text-danger'>Register here</span>
                                    </Link>

                                </div>

                            </form>
                        </div>

                    </div>
                    <div class="col-lg-6 px-0 d-none d-lg-block d-xl-block">
                        <img src={login}
                            alt="Login image" class="opacity-75 img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;