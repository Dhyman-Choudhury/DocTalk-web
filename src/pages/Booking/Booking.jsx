import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import Recharts from '../Recharts/Recharts';


const Booking = ({ doctor, handleDelete }) => {
    const { id, name, education, specialty, consultation_fee } = doctor || {};
    return (
        <div>
            
            <div className='bg-white rounded-xl max-w-10/12 mx-auto py-5 mb-10'>
           
                <div className='flex justify-between  px-10'>
                    <div>
                        <h2 className='text-2xl mb-3 text-gray-900 font-semibold '>{name}</h2>
                        <p className='text-gray-500 mb-3'>{education}, {specialty}</p>
                    </div>
                    <div>
                        <p className='text-gray-500 mb-3 text-xl font-semibold'>Consultation Fee: <span className=''>{consultation_fee} Taka + VAT</span></p>
                    </div>
                </div>
                <hr className='border-dashed border-gray-400 w-[95%] mx-auto my-2' />
                <div className='flex justify-center'>
                    <button
                        onClick={() => handleDelete(doctor)}
                        className='btn rounded-full px-[500px] my-5 bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white' >Cancel Appointment
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Booking;