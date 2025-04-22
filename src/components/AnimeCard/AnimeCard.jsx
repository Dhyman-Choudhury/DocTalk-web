import React from 'react';
import doctors from '../../assets/success-doctor.png'
import reviews from '../../assets/success-review.png'
import patients from '../../assets/success-patients.png'
import staffs from '../../assets/success-staffs.png'
import CountUp from 'react-countup';

const AnimeCard = () => {
    return (
        <div className=' bg-[#f4eff6] max-w-10/12 mx-auto pt-5 pb-10'>
            <div className='text-center'>
                <h1 className='text-6xl font-semibold text-gray-900 mb-5'>We Provide Best Medical Services</h1>
                <p className='mb-10'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <div className='bg-white rounded-xl p-5 space-y-5'>
                    <img src={doctors} alt="Doctors" />
                    <p className='text-4xl font-bold'><CountUp end={199} duration={6} />+</p>
                    <p className='text-gray-500 text-xl'>Total Doctors</p>

                </div>
                <div className='bg-white rounded-xl p-5 space-y-5'>
                    <img src={reviews} alt="Reviews" />
                    <p className='text-4xl font-bold'><CountUp end={467} duration={10} />+</p>
                    <p className='text-gray-500 text-xl'>Total Reviews</p>

                </div>
                <div className='bg-white rounded-xl p-5 space-y-5'>
                    <img src={patients} alt="Patients" />
                    <p className='text-4xl font-bold'><CountUp end={1900} duration={12} />+</p>
                    <p className='text-gray-500 text-xl'>Patients</p>

                </div>
                <div className='bg-white rounded-xl p-5 space-y-5'>
                    <img src={staffs} alt="Staffs" />
                    <p className='text-4xl font-bold'><CountUp end={300} duration={8} />+</p>
                    <p className='text-gray-500 text-xl'>Total Stuffs</p>

                </div>

            </div>

        </div>
    );
};

export default AnimeCard;