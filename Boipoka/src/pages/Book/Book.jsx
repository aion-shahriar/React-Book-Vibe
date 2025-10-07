import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { GiButtonFinger } from 'react-icons/gi';
import { Link } from 'react-router';

const Book = ({singleBook}) => {

    // const data = use(bookPromise)

    const { bookId, bookName, image, rating, category, tags, yearOfPublishing, publisher}=singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-6">
                <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
                    <img
                    src={image}
                    className='h-[166px]'
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-10'>
                        {
                            tags.map(tag=><button>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Published By - {publisher}</p>
                    <div className='border-t-1 border-dashed'>

                    </div>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <FaStarHalfAlt></FaStarHalfAlt></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;