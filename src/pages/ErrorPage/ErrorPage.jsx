import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className='max-w-10/12 mx-auto rounded-xl py-12 text-center space-y-5'>
                <h1 className='text-7xl font-thin text-gray-900'>No Doctor Found</h1>
                <p className='text-xl text-gray-900'>No Doctor Found with this registration No </p>
                <button className='btn btn-info text-white'>View All Doctor</button>
            </div>
            
        </>
    );
};

export default ErrorPage;