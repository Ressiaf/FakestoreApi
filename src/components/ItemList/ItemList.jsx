import React from 'react'
import ItemCard from './ItemCard'

const ItemList = (  { data } ) => {
    return (
        <>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-12  m-4 '>
                { data.map( (product) => <ItemCard product={product} key={product.id} />  ) }
            </div>
        </>
    )
}

export default ItemList