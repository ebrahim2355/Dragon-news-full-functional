import React from 'react';
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className='font-semibold mb-5 text-xl'>QZone</h2>
            <div className='space-y-8'>
                <img className='w-full' src={swimmingImg} alt="" />
                <img className='w-full' src={classImg} alt="" />
                <img className='w-full' src={playImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;