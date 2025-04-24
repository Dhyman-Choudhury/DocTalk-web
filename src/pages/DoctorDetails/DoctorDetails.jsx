
import { PiTrademarkRegistered } from 'react-icons/pi';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  addToBookings, getBookings } from '../../utilities/addToDB';


const DoctorDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const viewDoctor = data.find(doctor => doctor.id === parseInt(id));
    const { image, name, education, specialty, registration_number, availability, working_place, consultation_fee } = viewDoctor ||{};

    const navigate = useNavigate()

    const handleAddToDB = (doctor) => {
        const bookings = getBookings();
        console.log(bookings)
        
        const isExist = bookings.find(d => d.id === doctor.id)
        if (isExist) {
          return toast.warn('Appointment already exists!');
        } else {
            addToBookings(doctor)
            // toast.success(`Appointment completed!`)
           navigate('/bookings')      
      } 
    }
    
    
    return (
        
        <div className='bg-[#f4eff6] py-10'>
           
            <div className='bg-white rounded-xl max-w-10/12 mx-auto py-10 text-center mb-10'>
                <h2 className='text-6xl mb-5 text-gray-900 font-semibold'>Doctor’s Profile Details</h2>
                <p className='text-gray-400 mb-5'>Explore expert doctors’ profiles including specialties, education,<br /> experience, availability, and more — helping you find the right healthcare professional for your needs, any day of the week.</p>
            </div>
           
            <div className='bg-white flex gap-10 rounded-xl max-w-10/12 mx-auto p-10  mb-10'>
                <div className='bg-blue-300  rounded-xl p-5 flex justify-center '>
                    <img className='object-cover' src={image} alt="Doctor" />
                </div>
                <div>
                    <h2 className='text-4xl mb-5 text-gray-900 font-semibold'>{name}</h2>
                    <p className='text-gray-500 mb-3'>{education}</p>
                    <p className='text-gray-500 mb-3'>{specialty}</p>
                    <p className='text-gray-400 mb-3'>Working at:</p>
                    <p className='text-gray-900 mb-3 text-xl font-semibold'>{working_place}</p>
                    <hr className='border-dashed border-gray-400 w-[95%] mx-auto my-3' />
                    <div className='flex gap-2 items-center'>
                        <PiTrademarkRegistered size={25} />
                        <p className='text-lg text-gray-700'>Reg No: {registration_number}</p>
                    </div>
                    <hr className='border-dashed border-gray-400 w-[95%] mx-auto my-3' />
                    <div className='flex mb-2'>
                        <p className='text-gray-900 mb-3 text-xl font-semibold'>Availability</p>
                        {availability.map((day, index) => (
                            <button key={index} className='btn rounded-full bg-red-50 text-red-400 ml-3'>{day}</button>
                        ))}
                    </div>
                    <p className='text-gray-900 mb-3 text-xl font-semibold'>Consultation Fee: <span className='text-blue-500'>{consultation_fee} taka</span></p>
                </div>
            </div>

            <div className='bg-white rounded-xl max-w-10/12 mx-auto py-10  mb-10'>
                <h2 className='text-4xl mb-5 text-gray-900 font-semibold text-center'>Book an Appointment</h2>
                <hr className='border-dashed border-gray-400 w-[95%] mx-auto my-2' />
                <p className='text-gray-900 mb-3 text-xl font-semibold px-8'>Availability</p>
                <hr className='border-dashed border-gray-400 w-[95%] mx-auto my-2' />
                <div className='flex justify-center'>
                    
                        <button 
                        onClick={()=>handleAddToDB(viewDoctor)}
                        className='btn rounded-full px-[500px] my-5 bg-blue-700 text-white' > Book Appointment Now
                        </button>
                        <ToastContainer/>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;
