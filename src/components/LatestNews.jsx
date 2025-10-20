import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-3' pauseOnHover={true} speed={60}>
                <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia iusto id quibusdam asperiores. Libero cum ipsum ratione modi laudantium est!</p>
                <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia iusto id quibusdam asperiores. Libero cum ipsum ratione modi laudantium est!</p>
                <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia iusto id quibusdam asperiores. Libero cum ipsum ratione modi laudantium est!</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;