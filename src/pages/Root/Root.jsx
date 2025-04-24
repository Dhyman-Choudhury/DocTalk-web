import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
              <ToastContainer/>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;