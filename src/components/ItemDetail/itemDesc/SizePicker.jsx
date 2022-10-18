import React from "react";
import { RadioGroup } from '@headlessui/react'

const SizePicker = ({product}) => {
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [selectedSize, setSelectedSize] = React.useState(product.sizes[2]);

    return (
        <>
            <div className="mt-12">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl text-gray-900 font-bold"> Talles : </h3>
                    <a
                        href="#"
                        className="text-lg text-gray-500 font-bold "
                    >
                        - Guia de talles -
                    </a>
                </div>
            <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="mt-4"
            >
            <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 ">
                    {product.sizes.map((size) => (
                <RadioGroup.Option
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={({ active }) =>
                    classNames(
                        size.inStock
                        ? "bg-white shadow-sm  text-gray-900  font-bold  text-md cursor-pointer  "
                        : "bg-gray-50 text-gray-200 cursor-not-allowed",
                        active ? "ring-2 ring-gray-800" : "",
                        "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-bold uppercase  hover:bg-white focus:outline-none sm:flex-1 sm:py-6 "
                    )
                    }
                >
                    {({ active, checked }) => (
                        <>
                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                        {size.inStock ? (
                        <span
                            className={classNames(
                            active ? "border" : "border-2",
                            checked ? "border-gray-500" : "border-transparent",
                            "absolute -inset-px rounded-md pointer-events-none"
                            )}
                            aria-hidden="true"
                        />
                            ) : (
                        <span
                            aria-hidden="true"
                            className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                        >
                            <svg
                            className="absolute inset-0 w-full h-full text-gray-200 stroke-2 "
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                            >
                            <line
                                x1={0}
                                y1={100}
                                x2={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                            />
                            </svg>
                        </span>
                        )}
                        </>
                    )}
                        </RadioGroup.Option>
                    ))}
                    </div>
                </RadioGroup>
            </div>
        </>
    );
};

export default SizePicker;
