import { useEffect, useState } from "react";
import { UseFirebase } from "../../utils/useFirebase";
import { useAppContext } from "../../_context";
import { toast } from "react-hot-toast"
import { AiOutlineClose, AiOutlineQuestion } from "react-icons/ai"


const JoinWaitlist = () => {
    const { email, setEmail, showModal, setShowModal, d, dset } = useAppContext()
    const [value, setValue] = useState<any>("")
    const [onSubmit, setSubmit] = useState(false)


    const emailRegex = /\S+@\S+\.\S+/;

    useEffect(() => {
        (async () => {
            console.log(onSubmit)
            if (onSubmit) {
                if (emailRegex.test(value)) {
                    setEmail(value)
                    setShowModal(true)
                    setSubmit(false)
                }
                else {
                    toast.error("enter valid email")
                }
            }
        })();
    }, [onSubmit]);


    return (
        <>
            {d ? (
                <>
                    <div
                        className="justify-center items-center backdrop-blur-lg flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto ">
                            {/*content*/}
                            <div className=" rounded-lg shadow-lg relative px flex  px-3 flex-col w-full bg-black border card p outline-none focus:outline-none ">
                                {/*header*/}
                                <div className="flex items-start  md:p-5 rounded-t">
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 counter  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => dset(false)}
                                    >
                                        <AiOutlineClose className="text-4xl" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex flex-col my-12 lg:w-[600px] ">
                                    <div className="text-center md:mb-24 mb-5">
                                        <h1 className="counter text-3xl md:text-5xl font-bold">Reserve your spot</h1>
                                        <p className="md:text-5xl font-bold md:mt-9 text-3xl">Get Early Acess</p>
                                    </div>

                                    <form
                                        className="w-full p-3 flex flex-col lg:flex-row items-center"
                                        onSubmit={async (e) => {
                                            e.preventDefault();
                                            setSubmit(true)
                                        }}
                                    >
                                        <input value={value} onChange={
                                            (e) => {
                                                setValue(e.target.value)
                                            }
                                        } type="text" placeholder="Enter your email " className="bg-transparent rounded-full border card mb-4 lg:m-0 py-3 px-4 w-full" />
                                        <input type="submit" value="join waitlist" className="mx-2 px-9 py-4 bg-slate-900 text-sm hero rounded-full " />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}





        </>
    )
}

export default JoinWaitlist;