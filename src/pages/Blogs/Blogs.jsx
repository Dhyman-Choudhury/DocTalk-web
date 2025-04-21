import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const data = useLoaderData();
    
    return (
        <div className='bg-[#f4eff6] py-10'>
            {
                data.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;