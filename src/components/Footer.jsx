import React from 'react'
import { PiPlusSquare } from "react-icons/pi";

const Footer = () => {
    const upperFooterItems = [
        "العربية",
        "Français (France)",
        "Deutsch",
        "Русский",
        "Bahasa Indonesia",
        "Español",
        "Português (Brasil)",
        "Italiano",
        "हिन्दी"]
    const lowerFooterItems = [
        "Sign Up",
        "Log In",
        "Messenger",
        "Facebook Lite",
        "Video",
        "Places",
        "Games",
        "Marketplace",
        "Meta Pay",
        "Meta Store",
        "Meta Quest",
        "Meta AI",
        "Instagram",
        "Threads",
        "Fundraisers",
        "Services",
        "Voting Information Center",
        "Privacy Policy",
        "Privacy Center",
        "Groups",
        "About",
        "Create ad",
        "Create Page",
        "Developers",
        "Careers",
        "Cookies",
        "Ad choices",
        "Terms",
        "Help",
        "Contact Uploading & Non - Users"]
    return (
        <div className='contener mx-auto px-60 py-10 relative left-11'>
            <ul className='flex text-xs gap-3 flex-wrap text-gray-500'>
                <li>
                    <a
                        href="#"
                        className='inline-block hover:underline text-gray-800'>
                        English (US)</a>
                </li>
                {
                    upperFooterItems.map(item =>
                        <li><a href="#" className='inline-block hover:underline'>{item}</a></li>
                    )
                }
                <a
                    href="#"
                    className='inline-block hover:underline'>
                    <PiPlusSquare className='w-5 h-5 relative -top-1' />
                </a>
            </ul>
            <hr className='m-2' />
            <ul className='flex text-xs gap-3 align-middle flex-wrap text-gray-500'>
                {
                    lowerFooterItems.map(item =>
                        <li><a href="#" className='inline-block hover:underline'>{item}</a></li>
                    )
                }
            </ul>
            <div className='flex text-xs align-middle flex-wrap text-gray-800 py-5'>
                <span>Meta &copy; 2024</span>
            </div>
        </div>
    )
}

export default Footer