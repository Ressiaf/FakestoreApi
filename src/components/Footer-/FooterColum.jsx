import React from 'react'
import { nanoid } from 'nanoid'

const FooterColum = ({ theme ,title })  => {
return (
        <div>
            <h2 className='my-3 text-sm font-semibold text-gray-400 uppercase pt-2 underline underline-offset-4'>
                { title}
            </h2>
                <ul>
                    {theme.map((item) => (
                        <li className='mb-4' key={nanoid()}>
                            <a
                                key={item.id}
                                href={item.href}
                                className="hover:underline"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default FooterColum