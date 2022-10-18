import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import LoginIcon from "@mui/icons-material/Login";
import Login from "../../../containers/Login";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";


const LoginButton = ({ mobile }) => {




return (
    <>

    {
        mobile ?
        (
            <Popover.Button
                to={"/login"}
                as={Link}
                className="text-gray-200 uppercase whitespace-nowrap p-1 inline-flex items-center justify-cente text-base font-medium py-1 px-3  decoration-white"
            >
                <LoginIcon />
            </Popover.Button>
        ) : (
            <Popover className="relative">
                <>
                    <Popover.Button 
                        className="text-gray-200 uppercase whitespace-nowrap p-1 inline-flex items-center justify-cente text-base font-medium py-1 px-3  decoration-white "
                    >
                        <LoginIcon />
                    </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                    <Popover.Panel className="absolute z-10 mt-10  transform px-2 w-screen max-w-md sm:px-0  md:-translate-x-3/4 ml-4 ">
                    <div className="bg-[image:url('https://snipboard.io/bAXzWf.jpg')] h-full w-full  rounded-md absolute overflow-hidden  ">  </div>
                        <div className="rounded  shadow shadow-gray-800 ring-2 ring-black ring-opacity-5 overflow-hidden  border-gray-300 " >
                        <div className="relative grid gap-6 bg-slate-50/90 px-2 py-6 sm:gap-8 sm:p-8 ">
                        <Popover.Button className=" absolute top-4 right-4 rounded p-1 inline-flex items-center justify-center text-gray-900 border-2 border-gray-300 ">
                                <XIcon className="h-8 w-8 opacity-90" aria-hidden="true" />
                        </Popover.Button>   
                            <div>

                                        <Login  />
                                        <div className="flex items-center justify-between px-6 -mt-6   ">
                                        <p className="text-md">No tenes cuenta?</p>
                                            <span>-</span>
                                            <Popover.Button
                                                to={"/register"}
                                                as={Link}
                                                className=" text-black mr-1 font-bold text-lg"
                                            >
                                                Registrate
                                            </Popover.Button>
                                    </div>
        
                            </div>
                        </div>
                        </div>
                    </Popover.Panel>
                    </Transition>
                </>
                
            </Popover>
            )
        }
    </>
);
};

export default LoginButton;
