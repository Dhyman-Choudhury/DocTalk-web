
import { toast, ToastContainer } from "react-toastify";

export const getBookings = () => {
   const bookings = localStorage.getItem('bookings');
   if (bookings) return JSON.parse(bookings);
   return [];
};



export const addToBookings = doctor => {
    const bookings = getBookings();
        bookings.push(doctor);
        localStorage.setItem('bookings', JSON.stringify(bookings));        
};

export const removeBookings = id => {
    const bookings = getBookings();
    const remainBookings = bookings.filter(doctor => doctor.id !== id);
    localStorage.setItem('bookings', JSON.stringify(remainBookings));
    
};
