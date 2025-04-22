import React from 'react';
import { NavLink } from 'react-router';

const EmptyState = () => {
    return (
        <div className='min-h-[calc(100vh-280px)] bg-[#f4eff6] py-10'>
            <div className='max-w-10/12 mx-auto rounded-xl py-12 text-center space-y-5 bg-white '>
                <h1 className='text-7xl font-thin text-gray-900'>You Have Not Booked Any Appointment</h1>
                <p className='text-xl text-gray-900'>Our platform connect you to get verified experience doctors.</p>
                <NavLink to='/'>
                    <button className='btn btn-info text-white'>Book an Appointment</button>
                </NavLink>
            </div>

        </div>
    );
};

export default EmptyState;