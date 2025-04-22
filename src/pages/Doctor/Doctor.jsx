import React from 'react';
import { PiTrademarkRegistered } from 'react-icons/pi';
import { Link } from 'react-router';

const Doctor = ({ doctor }) => {
    const { id, image, name, education, specialty, experience, registration_number } = doctor
    return (
        <div className="card bg-base-100  shadow-sm p-5">
            <figure className='bg-blue-300  rounded-xl'>
                <img
                    className=''
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='space-x-3'>
                    <button className='bg-green-50 px-3 rounded-full text-green-400 text-lg'>Available</button>
                    <button className='btn rounded-2xl bg-blue-50 text-blue-400 '>{experience}</button>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{education}, {specialty}</p>
                <hr className='border-dashed border-gray-400 w-[90%] mx-auto' />
                <div className='flex gap-2 items-center'>
                    <PiTrademarkRegistered  size={25}/>
                    <p className='text-lg text-gray-700'> Reg No : {registration_number}</p>
                </div>
                <div className=" flex justify-center ">
                    <Link to={`/doctor-details/${id}`} >
                        <button
                            className='btn px-20 rounded-full text-blue-600 border text-lg border-blue-600  bg-white hover:bg-blue-600 hover:text-white'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;