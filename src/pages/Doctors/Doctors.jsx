import React, { useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ data }) => {
    const [phones, setPhones] = useState(data.slice(0, 6));
    
   const handleShowAll = () =>{
    setPhones(data)
   }
    return (
        <div className=' max-w-10/12 mx-auto  my-10 py-10'>
            <div className='text-center'>
                <h3 className='text-5xl font-semibold text-gray-800 mb-4 '>Our Best Doctors</h3>
                <p className='mb-10'>Easily connect with verified, experienced doctors across a wide range of specialties — all from the comfort of <br /> your home. Whether you need a routine checkup or an urgent consultation, book appointments in minutes and receive trusted, high-quality care.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    phones.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
            <div className='flex justify-center py-5'>
                <button 
                onClick={handleShowAll}
                className="btn rounded-full bg-blue-700 text-white">View All Doctors</button>
            </div>
        </div>
    );
};

export default Doctors;