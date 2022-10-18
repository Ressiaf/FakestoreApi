import FooterSocialNet from '../components/Footer-/FooterSocialNet';
import FooterColum from '../components/Footer-/FooterColum';
import { nanoid } from 'nanoid';

const Footer = ( ) => {

    const institucional = [
        { name: 'Trabaja con nosotros', href: '#' , id: nanoid() },
        { name: 'Contacto', href: '#' , id: nanoid() },
        { name: 'FAQ', href: '#'   , id: nanoid() },
    ]
    
    const ayuda = [
        { name: 'Lista de talles', href: '#'   , id: nanoid() },
        { name: 'Politica de cambios', href: '#'  , id: nanoid() },
        { name: 'Envios y seguimientos', href: '#'  , id: nanoid() },
    ]
    
    const legal = [
        { name: 'Términos y Condiciones', href: '#'  , id: nanoid() },
        { name: 'Políticas de Privacidad', href: '#'  , id: nanoid()},
        { name: 'Defensa del Consumidor', href: '#' , id: nanoid() },
    ]

return (

        <footer className='bg-black text-gray-200 font-robo border-t-4  border-gray-300 '>
            <div className='grid grid-cols-2 gap-8 py-8 px-10 md:grid-cols-4 '>
                <FooterColum theme={institucional} title='Institucional'/>
                <FooterColum theme={ayuda} title='Ayuda' />
                <FooterColum theme={legal} title='Legal' />
                <p>FLECHA  A ARRIBA <br />
                    PARA SUBIR A HEADER
                </p>

            </div>
            <FooterSocialNet />
        </footer>
    
)
}

export default Footer