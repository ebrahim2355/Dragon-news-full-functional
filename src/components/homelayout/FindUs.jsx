import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-5 text-xl'>Find Us on</h2>
            <div className="join join-vertical w-full bg-base-100">
                <button className="btn join-item bg-base-100 justify-start py-6"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item bg-base-100 justify-start py-6"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item bg-base-100 justify-start py-6"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;