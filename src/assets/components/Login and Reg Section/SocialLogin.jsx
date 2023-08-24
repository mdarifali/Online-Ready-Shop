import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const navigate = useNavigate();
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const facebookUser = result.user;
                console.log(facebookUser);
                navigate('/');
            })
            .catch(error => {
                console.log('error', error.message);
            })


    }


    return (

        <div class="text-center mb-4">
            <button onClick={handleGoogleLogin} className='btn btn-lg w-100 btn-outline-secondary rounded-0 mb-4'>
                <FcGoogle className='fs-3 me-2' />
                <small>Continue with Google</small>
            </button>
            <button onClick={handleFacebookLogin} className='btn btn-lg w-100 btn-outline-secondary rounded-0'>
                <AiFillFacebook className='fs-3 me-2' style={{ color: '#3b5998' }} />
                <small>Continue with Facebook</small>
            </button>
        </div>
    );
};

export default SocialLogin;