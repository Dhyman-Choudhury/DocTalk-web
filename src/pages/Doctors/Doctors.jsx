import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({data}) => {
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-10/12 mx-auto gap-5 my-10'>
           {
            data.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
           } 
        </div>
    );
};

export default Doctors;