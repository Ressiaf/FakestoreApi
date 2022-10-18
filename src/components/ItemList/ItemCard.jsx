import FormButton from "../Gobals/Buttons/FormButton"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Count from "./Count"
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ItemCard ( { product } ) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const onSubmit =  (event) => {
        event.preventDefault();
        try {
            setLoading(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleNavigate = () =>{
        navigate("/products/:id", {
            replace: true,
        });
    }    


    return (
        <> 
            <div className=" flex flex-col items-center overflow-hidden bg-white/80 rounded border border-gray-200 shadow-md  shadow-gray-800 ring-2 ring-black ring-opacity-5 md:flex-row ">
                    <img 
                        className=" object-cover w-fill rounded-t-lg md:h-auto md:w-56 md:rounded-none md:rounded-l-lg m-8 "
                        src={product.image}
                        alt={product.title}
                    />
                    <div className="flex flex-col justify-between item-center p-4 leading-normal m-8 ">
                        <div className="flex flex-col justify-between">
                    <a href="#">
                        <h4 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                            {product.title}
                        </h4>
                    </a>
                    <p>{product.description} </p>
                    <p className="mb-8 font-bold text-2xl text-gray-800  mt-8"> {product.price}  $ </p>
                    </div>
                    <form className="" onSubmit={ onSubmit }>
                            <div className=" flex justify-between items-center">
                                <Count />
                                <FormButton
                                type="button"
                                icon={<SearchIcon className="inline ml-2 " />}
                                color="black"
                                onClick={handleNavigate}
                                />
                            </div>
                            <FormButton
                                text=" Agregar  al  carrito"
                                type="submit"
                                icon={<ShoppingCartIcon className="inline ml-2" />}
                                color="blackL"
                                loading={loading}
                            />
                    </form >
                    </div>
            </div>
        </>
    )    
}
