import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    const data = useLoaderData();
    


    return (
        <div className='bg-[#f4eff6] min-h-[calc(100vh-260px)]'>
            <Banner/>
            <Doctors data={data}/>
        </div>
    );
};

export default Home;