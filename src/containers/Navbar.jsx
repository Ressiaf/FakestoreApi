import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon, UserIcon } from "@heroicons/react/outline";
import { nanoid } from "nanoid";
import { Link  } from "react-router-dom";
import CartButton from "../components/Header-/Navbar/CartButton";
import LoginButton from "../components/Header-/Navbar/LoginButton";
import SearchButton from "../components/Header-/Navbar/SearchButton";
import HamburgerButton from "../components/Header-/Navbar/HamburgerButton";
import NavLinkMenu from "../components/Header-/Navbar/NavLinksMenu";
import NavLinks from "../components/Header-/Navbar/NavLinks";
import Header from "./Header";
import SearchBar from "../components/Header-/Navbar/SearchBar";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const navegateShop = [
  {name: "tu cuenta ",href: ""},
  {name: "favoritos",  href: ""},
  {name: "Logout  ",  href: "#",  onclick:"a"},

];

const navegateArtists = [
    {name: "electronics", href: "/products"},
    {name: "jewelery", href: "/products"},
    {name: "men's clothing",  href: "/products"},
    {name: "women's clothing",  href: "/products"},
];
 
const Navbar = (  ) => {

  const { status } = useSelector((state) => state.auth);

  const isChecking = useMemo(() => status === "authenticated", [status]);



  return (
    <>

        <Header />
      <nav className="sticky top-0 h-full bg-black/95 font-robo md:px-2 z-full">
      <div className="xl:px-20 lg:px-12  px-8  mx-auto">
        <Popover>
          <div className="max-w-full mx-auto border-b-8 z-50 border-black tracking-wider">
            <div className="flex justify-between items-center py-4 md:justify-start">
              <div className="flex justify-start lg:w-0  md:flex-1 md:hidden lg:flex ">
                  <p className="text-white md:hidden flex">LOGO</p>
              </div>  
              <HamburgerButton />
              <Popover.Group as="nav" className="hidden md:flex lg:ml-20 space-x-6">
                <NavLinks title={"home"} href={"/"} />
                {/* <NavLinkMenu theme={navegateShop} title="Shop" /> */}
                <NavLinkMenu theme={navegateArtists} title="fake store Api" />
                <NavLinks title={"contact"} href={"/products"} />
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 ">
                <SearchButton />
                <CartButton/>
               
                {
                  isChecking?  
                  (
                    <NavLinkMenu 
                    theme={navegateShop} 
                    title={<UserIcon className="h-6 w-6" aria-hidden="true" /> }
                    />
                    ) : (
                      <LoginButton />
                      
                    )
                }
              </div>
              
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel className="absolute top-0 inset-x-0 p-2  transition transform origin-top-right md:hidden ">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black  border-2 ">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <Popover.Button className="bg-black absolute top-8 right-8 rounded-md p-2 inline-flex items-center justify-center text-gray-400 border-2 border-gray-300">
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <div className="my-4">
                    <nav className="grid gap-y-8 ">
                      {navegateShop.map((item) => (
                        <Popover.Button 
                          key={nanoid()} 
                          to={item.href} 
                          as={Link} 
                          className="-m-3 p-3 flex items-center"
                        >
                          <span className=" uppercase text-2xl font-medium text-gray-50 ">
                            {item.name}
                          </span>
                        </Popover.Button>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 pb-8 space-y-4">
                    <p className="text-gray-50 font-base ml-1 uppercase">
                      Busca entre nuestros productos:
                    </p>
                    <SearchBar />
                  <div className="pt-4 items-center flex justify-between ">
                    <LoginButton mobile={"mobile"}/>
                    <p className="text-white">logo</p>
                    <CartButton mobile={"mobile"}/>

                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
