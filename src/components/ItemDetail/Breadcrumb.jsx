import React from 'react'


const Breadcrumb = ( {product} ) => {
    return (
    <>
                        <nav aria-label="Breadcrumb">
                        <ol role="list" className=" mx-auto flex items-center space-x-2  lg:max-w-full pb-8 mt-8  ">
                            {product.breadcrumbs.map((breadcrumb) => (
                                <li key={breadcrumb.id}>
                                    <div className="flex items-center">
                                        <a href={breadcrumb.href} className="  uppercase font-bold tracking-tight text-gray-900 text-md md:text-xl  lg:text-2xl">
                                            {breadcrumb.name}
                                        </a>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="w-4 h-5 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                            ))}
                            <li className="">
                    
                                <a href={product.href} aria-current="page" className="text-md  md:text-xl  lg:text-2xl uppercase  font-bold tracking-tight text-gray-500 hover:text-gray-600 inline ">
                                    {product.name} 
                                    <hr />
                                    <span className=' text-gray-900 text-sm '>
                                        {product.artist}
                                    </span>
                                </a>
                            </li>
                        </ol>
                    </nav>
    
    </>
    )   
}

export default Breadcrumb