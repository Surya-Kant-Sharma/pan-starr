import { NavLink } from "react-router-dom";
import { useAppContext } from "../_context";
import { UserAuth } from "./GooogleProvider/GoogleAuthProvider";
import Logo from "./Logo";
import { BsPersonCircle } from "react-icons/bs";
import React from "react";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Docs",
    link: "/docs",
  },
];

const Navbar = () => {
  const { d, dset } = useAppContext();
  const { googleSignIn, user, logOut }: any = UserAuth();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
     {/* backdrop-blur-xl */}
      <nav className="bg-black px-5 py-4   sticky top-0 z-50 "> 
        <div className="flex justify-between items-center lg:w-[60%] m-auto">
          <div className="flex items-center">
            <div className="w-24">
              <Logo />
            </div>
            <ul className=" mx-9 hidden md:flex font-bold">
              {links.map((link: any) => {
                return (
                  <>
                    <NavLink
                      className={({ isActive }) =>
                        "mx-3 " +
                        " text-sm " +
                        "  " +
                        (isActive ? "counter" : "")
                      }
                      to={link.link}
                    >
                      {link.name}
                    </NavLink>
                  </>
                );
              })}
              <a
                href="https://kometverse.notion.site/Kometverse-Team-af006bc7947944aab126907c9af392bd"
                className="mx-3 text-sm "
              >
                Careers
              </a>
            </ul>
          </div>
          <div>
            {user == null ? (
              <button
                className="px-9 py-2 hero text-sm rounded-full "
                onClick={() => {
                  // dset(true)
                  console.log("nav user", user);
                  handleGoogleSignIn();
                }}
              >
                Sign In with Google
              </button>
            ) : (
              <div>
                <img
                  id="avatarButton"
                  // @ts-ignore
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  data-dropdown-toggle="userDropdown"
                  data-dropdown-placement="bottom-start"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAtwMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAACAwQAAQYHBf/EAB0QAQEBAAMBAQEBAAAAAAAAAAACAQMREiETMUH/xAAcAQACAwADAQAAAAAAAAAAAAADBAECBQAGBwj/xAAdEQADAQEBAQEBAQAAAAAAAAAAAQIDEhEEEyEx/9oADAMBAAIRAxEAPwD8d1mMtHq53Hccxt3oJog7W9YRdiuia+65MF5k5vdaZEtEnxKWiarw0QfENEnxJexerORB8S0SdklbQtdg5Jkw7kmxINSI3p6cmDZgUybMg0hatBeQLINyB5ITQtegjw3hR5byHyK3oTbAKhXsF1CORW9SOoZRUOOciz1/p5VmZ29o9LMGt+C0q9DU+s4kBeuRnbf3TIwTnwI34g4k+JDEnxgVIXugok+MDEnTJe0L3Qc4ZmOZgsAciWungU4dEhnDowGkIXYUSbMuThs4DUi12aZHkiyR5ITkVuxflvJvluleRO9BOyCpUbIKlHAlpqS1P1jdlk8ij1PEsza7S0evHKIrTa0rVpkvJpw+MLjD4xLRFMZGHxhcYfGA1ItTGRh0/ASLNAqRPW/BmDgrN7OgJyZmuno6MPgmFEYBUilWMnDpwuDpBqRa7CzB5jSPMDcielnMx3yLpkciGugvcLrDtLr+J4M7XYV571wzM7ZzgV/U8E5rrmuyef09xF0Xn9HQZzsVSXQ2MOnC5w6EOQVMbB0lTvQvQTkT0tIdmi7IyhTXYbgyt9SiNUQm41MA3Jn1RRB8EQfAFSAuh8HSTJ0g1IppQ3B4CTMD4EdbOszm7mOcGZtocoqhVRO0uszI328GS6CaZx5if7ngg0IFa3lJ9EC6dkNa2UOpLOkkUTvRmUmy3ctzgS128KfTuWn9t7Q4Mnff+FXszj1LFfVMBVJm1p6VcamEvHqmNLVIJ0U8amEsafGl6kXuimDpIjTp0JyJ6UOkeb0Vmt6V4M3Wxu0XVgqyrsSczI+jbkK7L9F1f1soZZGDtv6x2U6Vmsj8hb9Tw+2XVlbZdW2IzPo79w7tstPV/W9mZzBafQVZbuWl/Rv0X/MzdvoK/wBBRXaSaP49UrPwzL16ZZx6p49R8eqePStyU6LI1TGo+PVMUWqSjorjVEakjT40CoF7ZXGnTqWKNmgnIjrQ/wBObRXsO38SoMj6NUhlWVdgqy6rvR4zOu/VuH6dzS80c5ujcGNWjbDynWyHVeED6o+b7yF3ZFchd8jYjM+gH9I27c/RLfIH9DU5C2n1Fv6Cm+0cV2fGruPBGtnTLOPVHHqSNUcelrkhUWceqePUcao46K3Jb0tjVHHqONUcdFako2WcenxSSKPmi7kXtlc0ZlfEk2P2rwZf0aeD/QdsrbDtLzB1/wCrUZVhzQdjkdSdf3t0xsYfMg45UxiGgCk5kMfM/GV8L8HxSuQu+UuirdhiEesVtQdcnbsV2R/pvGZUoH26KuPVEal41EK0giZXGqI1JCiCtpBUV8eqeOkcKeMpaRPpXx0oiknGogrSIZVFGzaWTZBcoS2plM2P2mkaPEYv00x3tz12WKV0kdf+l+jMP4iMO4lvDJv/AEr4/wDFfHiTi/xZxqMtJRGfGHx/xlQ6R//Z"
                  alt="User dropdown"
                />

                {/* <!-- Dropdown menu --> */}
                <div
                  id="userDropdown"
                  className={`${(!menuOpen) ? 'hidden' : ''} absolute mt-2 -ml-36 z-10 w-44 bg-[#202020]  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <div className="py-3 px-4 text-sm text-white-900 dark:text-white">
                    <div>{user?.displayName}</div>
                    <div className="font-medium truncate">
                      {user.email}
                    </div>
                  </div>
                  {/* <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul> */}
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-white-700"
                      onClick={() => {
                        logOut();
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <ul className=" md:hidden flex justify-center sticky top-0 font-bold ">
        {links.map((link: any) => {
          return (
            <>
              <NavLink
                className={({ isActive }) =>
                  "mx-2 " +
                  " text-lg " +
                  "  counter" +
                  (isActive ? "underline" : "")
                }
                to={link.link}
              >
                {link.name}
              </NavLink>
            </>
          );
        })}
        <a
          href="https://kometverse.notion.site/Kometverse-Team-af006bc7947944aab126907c9af392bd"
          className="mx-3 text-lg counter"
        >
          Careers
        </a>
      </ul>
    </>
  );
};

export default Navbar;
