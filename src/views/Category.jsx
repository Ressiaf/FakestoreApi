import React from 'react'
import ItemListContainer from '../components/ItemList/ItemListContainer'
import { useParams  } from 'react-router-dom'

const Category = ( ) => {
    const { categoryId } = useParams ( ) ;
    
    console.log(categoryId)
    return (
        <>
            <ItemListContainer />
        </>
    )
}

export default Category

