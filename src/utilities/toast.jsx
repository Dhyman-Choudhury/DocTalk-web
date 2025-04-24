import { toast } from "react-toastify";

export const appointmentCompleted = () =>{
    toast.warn('Appointment already exist!');
}