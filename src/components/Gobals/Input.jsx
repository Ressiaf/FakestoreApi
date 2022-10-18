const Input = ({  placeholder , id , type  }) => {

return (
    <>
        <input
            id={id}
            name={type}
            type={type}
            autoComplete={type}
            required
            className="appearance-none rounded mb-4 relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-gray-900 focus:border-gray-900 focus:placeholder-gray-900 sm:text-sm"
            placeholder={placeholder}
        />
    </>
    );
};

export default Input;
