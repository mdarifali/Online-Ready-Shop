import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, getRedirectResult, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import app from '../../firebase/firebaseConfig';
import { useState } from 'react';

const SocialLogin = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleUser = result.user;
                setUser(googleUser)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleFacebookLogin = () => {
        e.preventDefault();
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const facebookUser = result.user;
                setUser(facebookUser)
            })
            .catch(error => {
                console.log('error', error.message);
            })


    }


    return (

        <div class="p-2 text-center">
            <button onClick={handleGoogleLogin} className='btn'>
                <FcGoogle className='fs-2 me-3' />
            </button>
            <button onClick={handleFacebookLogin} className='btn'>
                <AiFillFacebook className='fs-2' style={{ color: '#3b5998' }} />
            </button>
        </div>
    );
};

export default SocialLogin;