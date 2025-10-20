import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center pt-12'>
            <img src={logo} alt="" />
            <p className='mt-5'>Journalism Without Fear or Favour</p>
            <p className='font-semibold mt-2.5 mb-7'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;