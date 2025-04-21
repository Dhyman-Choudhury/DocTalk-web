import React from 'react';

const Blog = ({blog}) => {
    const {question, answer} =blog;
    return (
        <div className='max-w-10/12 mx-auto rounded-xl bg-white p-4 mb-10'>
            <p className='text-xl font-medium'>{question}</p>
            <hr className='border-dashed border-gray-400 my-5' />
            <p className='text-blue-500'>Answer:</p>
            <p>{answer}</p>
        </div>
    );
};

export default Blog;