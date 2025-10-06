import React from 'react';

import bookImage from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full'>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <button className='btn btn-primary'>Test</button>
            </div>
            <div>
                <img className="w-3/12" src={bookImage} alt="Books" />
            </div>
        </div>
    );
};

export default Banner;