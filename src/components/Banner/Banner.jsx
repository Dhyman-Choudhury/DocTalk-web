import React from 'react';
import banner from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div className='text-center border-4 border-white rounded-xl max-w-11/12 py-10  mx-auto space-y-4 bg-linear-to-b from-[#f4eff6] to-white'>
            <h1 className='text-7xl font-semibold '>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
            <p className=''>
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <form 
               className='flex flex-col md:flex-row gap-3 justify-center items-center mb-4 mx-auto '>
                <input 
                type="text" 
                placeholder='Search any doctor...'
                className='bg-white border-4 rounded-full border-white w-2/3 py-2 px-4 focus:outline-none'/>

                <button className='btn bg-blue-600 text-white rounded-full px-5 py-5 text-lg'>Search</button>

            </form>
            <div className='flex gap-5 mt-5 justify-center'>
                <img className='' src={banner} alt="Banner" />
                <img src={banner} alt="Banner" />

            </div>
            
        </div>
    );
};

export default Banner;