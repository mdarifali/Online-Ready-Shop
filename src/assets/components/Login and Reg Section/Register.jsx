import React from 'react';
import Swal from 'sweetalert2'
import reg from '../../images/reg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './socialLogin';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebaseConfig';

const Register = () => {

    const navigate = useNavigate();
    const auth = getAuth(app)

    const handleSubmit = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                const newUser = result.user;
                console.log(newUser);

                updateProfile(newUser, {
                    displayName: name
                })
                    .then(() => {
                        Swal.fire(
                            `Congratulations! ${newUser.displayName}`,
                            'Your Registration Successful',
                            'success'
                        )
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });

                    navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Faild',
                    text: `${error.message}`
                  })
            })
    }

    return (
        <div class="vh-100">
            <div class="container my-5">
                <div class="row">
                    <div class="col-sm-6 text-black bg-light">
                        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-5">

                            <form onSubmit={handleSubmit} style={{ width: "23rem" }}>

                                <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Register Now</h5>

                                <div class="form-outline mb-4">
                                    <input type="text" id='form2Example1' class="form-control form-control-lg" required name='name' />
                                    <label class="form-label" htmlFor="form2Example1">User Name</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example18" class="form-control form-control-lg" required name='email' />
                                    <label class="form-label" htmlFor="form2Example18">Email address</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example28" class="form-control form-control-lg" required name='password' />
                                    <label class="form-label" htmlFor="form2Example28">Password</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example29" class="form-control form-control-lg" required name='cpassword' />
                                    <label class="form-label" htmlFor="form2Example29">Confirm Password</label>
                                </div>

                                <div class="pt-1 mb-4">
                                    <button class="btn btn-info btn-lg rounded-0 w-100" type="submit">Sing Up</button>
                                </div>
                                <SocialLogin />
                                <div className='text-center'>
                                    <Link className='nav-link' to="/login" >Do you have an account?
                                        <span className='text-danger'>Login here</span>
                                    </Link>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src={reg}
                            alt="Login image" class="w-100 vh-100 opacity-75" style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;