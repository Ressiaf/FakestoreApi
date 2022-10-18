import React from 'react'
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const NavLinks = ( { title  , href }) => {
    return (
        <>
            <NavLink
                to={href}
                className="text-base  text-gray-200 font-medium p-1 underline-offset-4 decoration-2  hover:underline uppercase"
                key={nanoid()}
                on
                >
                {title}
            </NavLink>
        </>
    )
}

export default NavLinks