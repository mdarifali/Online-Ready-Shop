import React from 'react';

const Loading = () => {
    return (
        <div className='bg-light min-vh-100 d-flex align-items-center justify-content-center'>
            <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;