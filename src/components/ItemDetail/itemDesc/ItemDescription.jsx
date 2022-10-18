import React from "react";

const ItemDescription = ({product}) => {
return (
    <>
        <div className="py-8 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2  lg:pr-8 px-4 mt-4 ">
            <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                    <p className="text-base text-gray-900">{product.description}</p>
                </div>
            </div>
            <div className="mt-10">
                <h3 className="text-base font-bold uppercase text-gray-900">
                    Highlights:
                </h3>
                <div className="mt-4">
                    <ul role="list" className="pl-4 list-disc text-md space-y-2">
                        {product.highlights.map((highlight) => (
                            <li key={highlight} className="text-gray-400">
                                <span className="text-gray-600">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-base font-bold und text-gray-900 uppercase">
                    detalles :
                </h2>
            <div className="mt-4 space-y-6">
                <p className="text-md text-gray-600">{product.details}</p>
            </div>
            </div>
        </div>
    </>
    );
};

export default ItemDescription;
