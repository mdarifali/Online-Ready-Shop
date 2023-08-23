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
        <div className=''>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-6 col-12 text-dark " style={{ backgroundColor: '#ecf0f1' }}>
                        <div class="p-0 p-xl-5 p-lg-5 p-md-5">

                            <form onSubmit={handleSubmit}>

                                <h5 class="fw-bold text-center my-5">Register Now</h5>

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
                                <div className='text-center pb-5'>
                                    <Link className='nav-link' to="/login" >Do you have an account?
                                        <span className='text-danger'>Login here</span>
                                    </Link>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="col-lg-6 col-12 px-0 d-none d-lg-block d-xl-block">
                        <img src={reg}alt="Reg image" class="opacity-75 img-fluid "/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;