import React from "react";
import { StarIcon } from '@heroicons/react/solid'

const ItemReview = ( ) => {
  
  const reviews = { href: '#', average: 4, totalCount: 30 }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <div className="">
        <div className="flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  reviews.average > rating ? "text-gray-900" : "text-gray-400",
                  "h-6 w-6 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{reviews.average} out of 5 stars</p>
          <a
            href={reviews.href}
            className="ml-3 text-lg  font-medium text-gray-800"
          >
            -  {reviews.totalCount} reviews 
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemReview;
