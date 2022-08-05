import { FaArrowDown, FaArrowRight } from "react-icons/fa"
import { useAppContext } from "../_context";
import JoinWaitlist from "./Join waitlist";

const Hero = () => {
    const { email, setEmail, showModal, setShowModal, d, dset } = useAppContext()
    return (
        <><div className="">
            <div className="w-[80%] m-auto min-h-screen flex items-center justify-center  ">
                <div className="text-center  ">
                    <h1 className="text-4xl md:text-7xl font-bold " >The easiest way</h1>
                    <h1 className="text-4xl md:text-7xl font-bold" >access to <span className="counter">web3</span></h1>
                    <p className="text-sm md:text-xl py-6" >Lorem ipsum dolor sit amet t.</p>
                    <div className="w-full my-10 justify-center flex">
                        <button className="btn md:text-2xl px-12 py-3 rounded-full font-bold flex items-center" onClick={() => {
                            console.log("clicked")
                            dset(true)
                        }}><span className="mr-4">Join Waitlist Now </span><span><FaArrowRight /></span></button>
                    </div>
                    <div className="w-full flex items-center justify-center mt-32 ">
                        <button className="w-10 h-10 hero rounded-full  flex items-center justify-center">
                            <FaArrowDown />
                        </button>
                    </div>
                </div>
            </div>

        </div>
            <JoinWaitlist />

        </>
    )
}

export default Hero;