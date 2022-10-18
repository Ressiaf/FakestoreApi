import React from 'react'

const ItemTittle = ({product}) => {
    return (
    <>
        <div className="lg:col-span-2  ">
            <h1 className=" font-bold tracking-tight text-gray-900 text-2xl uppercase ">{product.name}
            <hr />
                <span className=' text-gray-600 text-xl no-underline'>
                    {product.artist}
                </span>
            </h1>
        </div>
    </>
    )
}

export default ItemTittle