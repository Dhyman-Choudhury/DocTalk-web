import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const data = useLoaderData();

    return (
        <div className='bg-[#f4eff6] py-10'>
            <div className='text-center space-y-5 mb-10'>
                <h3 className='text-6xl text-gray-900 font-semibold'>Blogs</h3>
                <p>Let's explore some basic concept that will make you a good developer</p>
            </div>
            <div>
                {
                    data.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;