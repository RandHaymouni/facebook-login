import React from 'react'
import facebookLogo from '../assets/facebookLogo.svg'
import Footer from '../components/Footer';
const Login = () => {
    return (
        <div>
            <section id='content' className='bg-gray-100 text-black'>
                <div className='container flex mx-auto justify-between px-60 py-32 w-full gap-x-28'>
                    <div className='text-xl py-7'>
                        <img src={facebookLogo} alt="Facebook logo" className='w-72 relative -left-7 -bottom-3' />
                        <h2>Connect with friends and the world around you on Facebook.</h2>
                    </div>
                    <div>
                        <div className='text-black bg-white rounded-lg shadow-xl p-4 w-96'>
                            <form action="#" className='grid'>
                                <input
                                    type="text"
                                    placeholder="Email or phone number"
                                    className='block border-2 p-2 rounded-md mb-3 text-lg w-full'
                                />
                                <input
                                    type="password"
                                    placeholder="password"
                                    className='block border-2 p-2 rounded-md mb-3 text-lg w-full' />
                                <button
                                    type="submit"
                                    className='block w-full rounded-md bg-blue-600 text-white font-bold text-center p-2 mb-3'>
                                    Log In
                                </button>
                            </form>
                            <a
                                href="#"
                                className='text-blue-600 hover:underline flex justify-center items-center mb-3'>
                                Forget password?
                            </a>
                            <hr className='mb-5' />
                            <div>
                                <a
                                    href="#"
                                    className='bg-green-600 p-2 flex justify-center items-center font-bold rounded-md text-white mx-auto w-44 m-3'>
                                    Create new account
                                </a>
                            </div>
                        </div>
                        <div className='mt-4 text-center text-sm'>
                            <p><a href="#" className='font-bold'>Create a Page</a> for a celebrity, brand or business.</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Login