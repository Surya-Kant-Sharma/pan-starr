import { AiFillTwitterSquare, AiFillLinkedin, } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"
import Logo from "../Logo";


const Footer = () => {
    return (
        <>
            <footer className=" p-3 md:p-12 md:w-[80%] m-auto md:flex justify-between">
                <div className="flex items-center">
                    <div className="w-32 mr-4">
                        <Logo />
                    </div>
                    <p className="text-[10px]">Copyright © 2022 - Komet Technology Inc - All Rights Reserved</p>
                </div>
                <div className="flex justify-center my-3">
                    <a href=""><AiFillLinkedin className="text-3xl text-white mx-3" /></a>
                    <a href=""><AiFillTwitterSquare className="text-3xl text-white mx-3" /></a>
                    <a href=""><BsDiscord className="text-3xl text-white mx-3" /></a>
                </div>
            </footer>
        </>
    )
}

export default Footer;