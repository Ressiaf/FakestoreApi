import React from 'react'
import axios from 'axios'
import ItemList from './ItemList'
import Breadcrumb from '../ItemDetail/Breadcrumb'


const ItemListContainer = ( ) => {

    const  [products , setProducts] = React.useState( [ ] )

    React.useEffect( ( ) =>{
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setProducts (response.data) )
            .catch ( (err) => console.log(err) )
    } ,  [ ] )

    const breadctumbs = [
            { "id": 1, "name": "fake store api", "href": "#" },
            { "id": 2, "name": "all products", "href": "#" }
        ]
    
    return (
        <>
            <div className="flex flex-col content-center  py-20">
            <nav aria-label="Breadcrumb">
                        <ol role="list" className=" mx-auto flex items-center space-x-2  lg:max-w-full pb-8   ml-4 ">
                            {breadctumbs.map((breadcrumb) => (
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
                        </ol>
                    </nav>
                <ItemList  data={products} />
            </div>
        </> 
    )
}

export default ItemListContainer