import React from 'react';

const Doctor = ({doctor}) => {
    const {image, name,education, specialty, registration_number} =doctor
    return (
        <div className="card bg-base-100  shadow-sm p-5">
            <figure className='bg-blue-300  rounded-xl'>
                <img
                   className=''
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{education}, {specialty}</p>
                <hr className='border-dashed border-gray-400 w-[90%] mx-auto' />
                <p  className='text-lg text-gray-700'>Reg No : {registration_number}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;