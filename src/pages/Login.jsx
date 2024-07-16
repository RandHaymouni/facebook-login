import React from 'react';
import facebookLogo from '../assets/facebookLogo.svg';
const Login = () => {
    return (
        <div>
            <section id='content' className='bg-gray-100 text-black'>
                <div className='contener flex mx-auto justify-between px-72 py-32 w-full'>
                    <div className='text-xl py-7'>
                        <img src={facebookLogo} alt="Faceebook logo" className='w-72 relative -left-7 -bottom-3' />
                        <p>Connect with friends and the world </p><p>around you on Facebook.</p>
                    </div>
                </div>
            </section>
            <footer>
            </footer>
        </div>
    )
}

export default Login