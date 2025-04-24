import React, { useEffect, useState } from 'react';

import { addToBookings, getBookings, removeBookings } from '../../utilities/addToDB';
import Booking from '../Booking/Booking';
import EmptyState from '../EmptyState/EmptyState';
import { toast, ToastContainer } from 'react-toastify';
import Recharts from '../Recharts/Recharts';
import { useLocation } from 'react-router';


const Bookings = () => {
    
    const [showDoctors, setShowDoctors] = useState([])

    useEffect(() => {
        const savedDoctors = getBookings();
        setShowDoctors(savedDoctors);  
        toast.success(`Appointment completed!`)
    }, []);

    

    const handleDelete = (doctor)=>{
        toast.info(`Appointment Canceled ${doctor.name}`)
        removeBookings(doctor.id);
        setShowDoctors(getBookings());
        
    }
    
    if(showDoctors.length<1) return <EmptyState/>
    return (
        <div className='min-h-[calc(100vh-280px)] bg-[#f4eff6] py-10 '>
            <ToastContainer/>
            <div className='max-w-10/12 py-10 mx-auto bg-white rounded-xl'>
                    <Recharts showDoctors={showDoctors}></Recharts>
                    
            </div>
            <div className='text-center py-10'>
                <h3 className='text-5xl font-bold text-gray-900 mb-5'>My Today Appointments</h3>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            {
                showDoctors.map(doctor => <Booking key={doctor.id} doctor={doctor} handleDelete={handleDelete} ></Booking>)
                
            }
             
        </div>
    );
};

export default Bookings;