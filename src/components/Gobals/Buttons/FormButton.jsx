import LoadingButton from "./LoadingButton";

const FormButton = ({ text, type, color="black" , loading, onClick ,icon }) => {    
     
    if (loading) return <LoadingButton color={color} />;

    const Buttonclass = " relative inline-flex group items-center justify-center px-6 py-2 cursor-pointer text-white font-medium rounded text-sm text-center  inline-flex items-center ";

    let Buttoncolor;
        if (color === "black") {
            Buttoncolor = "bg-black/95 text-white hover:bg-black/90  overflow-hidden shadow-sm shadow-black/60 border border-spacing-2 border-black/80";
        }
        if (color === "blackL") {
            Buttoncolor = "bg-black/95 w-full text-white hover:bg-black/90  overflow-hidden shadow-sm shadow-black/60 border border-spacing-2 border-black/80";
        }


    return (    
        <button
            onClick={ onClick }
            type={ type }
            className={ Buttonclass + Buttoncolor }
        >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-50 rounded-full group-hover:w-full group-hover:h-48 opacity-10 " ></span>
                <span className="relative">
                    { text }
                    {icon}
                </span>
        </button>
    );
};

export default FormButton;

