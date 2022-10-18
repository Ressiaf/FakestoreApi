import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const SearchBar = ( ) => {
    return (
        <>
            <form action="search" className='flex items-center'>
                <label htmlFor="simple-search" className='sr-only' >Search</label>
                <div className='relative w-full ' >
                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                        <span className=' text-gray-900 '>
                            <SearchSharpIcon />
                        </span>
                    </div>
                    <input type="text" id="simple-search" className='bg-gray200 border-2 border-gray-800 text-gray-900 text-sm rounded block w-full pl-14 p-2 '   placeholder="Search" required />                    
                </div>
            </form>
        </>
    )
}

export default SearchBar