import React from 'react'
import { PiPlusSquare } from "react-icons/pi";
import facebookLogo from '../assets/facebookLogo.svg'
const Login = () => {
    return (
        <div>
            <section id='content' className='bg-gray-100 text-black'>
                <div className='contener flex mx-auto justify-between px-72 py-32 w-full'>
                    <div className='text-xl py-7'>
                        <img src={facebookLogo} alt="Faceebook logo" className='w-72 relative -left-7 -bottom-3' />
                        <p>Connect with friends and the world </p><p>around you on Facebook.</p>
                    </div>
                    <div>
                        <div className='text-black bg-white rounded-lg shadow-xl p-4 w-96'>
                            <form action="#" className='grid'>
                                <input type="text" placeholder="Email or phone number" className='block border-2 p-2 rounded-md mb-3 text-lg w-full' />
                                <input type="password" placeholder="password" className='block border-2 p-2 rounded-md mb-3 text-lg w-full' />
                                <button type="submit" className='block w-full rounded-md bg-blue-600 text-white font-bold text-center p-2 mb-3'>Log In</button>
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
                                    className='bg-green-600 p-3 flex justify-center items-center font-bold rounded-md text-white mx-auto w-44 m-3'>
                                    Creat new account
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
                <div className='contener mx-auto px-60 py-10 relative left-11'>
                    <ul className='flex text-xs gap-3 flex-wrap text-gray-500'>
                        <li><a href="#" className='inline-block hover:underline text-gray-800'>English (US)</a></li>
                        <li><a href="#" className='inline-block hover:underline'>العربية</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Français (France)</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Deutsch</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Русский</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Bahasa Indonesia</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Español</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Português (Brasil)</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Italiano</a></li>
                        <li><a href="#" className='inline-block hover:underline'>हिन्दी</a></li>
                        <a href="#" className='inline-block hover:underline'><PiPlusSquare className='w-5 h-5 relative -top-1' /></a>
                    </ul>
                    <hr className='m-2' />
                    <ul className='flex text-xs gap-3 align-middle flex-wrap text-gray-500'>
                        <li><a href="#" className='inline-block hover:underline'>Sign Up</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Log In</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Messenger</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Facebook Lite</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Video</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Places</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Games</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Marketplace</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Meta Pay</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Meta Store</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Meta Quest</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Meta AI</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Threads</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Fundraisers</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Services</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Voting Information Center</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Privacy Policy</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Privacy Center</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Groups</a></li>
                        <li><a href="#" className='inline-block hover:underline'>About</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Create ad</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Create Page</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Developers</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Careers</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Cookies</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Ad choices</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Terms</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Help</a></li>
                        <li><a href="#" className='inline-block hover:underline'>Contact Uploading & Non-UsersSettings</a></li>
                    </ul>
                    <div className='flex text-xs align-middle flex-wrap text-gray-800 py-5'>
                        <span>Meta © 2024</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Login