
import { useEffect, useState } from "react";
import { RWebShare } from "react-web-share";
import { useAppContext } from "../_context";

import checkRefUrlExists, { checkIFUserExist, getRank, updatePoints, createUser, getUserRefUrl } from "../utils/useFirebase2";
import { AiOutlineClose } from "react-icons/ai";

export const Rank = () => {
    const [rank, setRank] = useState(0);
    const [reflink, setrefLink] = useState("");
    const { email } = useAppContext()
    const { showModal, setShowModal, onSubmit, dset } = useAppContext()
    useEffect(() => {
        (async () => {
            const [refurlExist, refid] = checkRefUrlExists()
            console.log(refurlExist, refid)
            if (email) {
                const [userExist, user] = await checkIFUserExist(email)
                console.log(userExist, user)
                if (userExist) {
                    const rank = await getRank(email);
                    setRank(rank)
                    const newRefurl = await getUserRefUrl(email)
                    console.log(newRefurl)
                    setrefLink(newRefurl)
                } else {
                    const newUser = await createUser(email)
                    console.log('user created')
                    const newRefurl = await getUserRefUrl(email)
                    console.log(newRefurl)
                    setrefLink(newRefurl)
                    const rank = await getRank(email);
                    console.log(rank)
                    setRank(rank)
                    if (refurlExist) {
                        const res = await updatePoints(refid)
                        console.log(res)
                    }
                }
            }
        })();
    }, [email]);


    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center backdrop-blur-2xl flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-full  my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className=" rounded-lg shadow-lg relative px flex md:px-10  px-3 flex-col w-full bg-black border border-[#30D293] p outline-none focus:outline-none">
                                {/*header*/}
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 counter  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => {
                                        setShowModal(false)
                                    }}
                                >
                                    <AiOutlineClose className="text-4xl" />
                                </button>

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className=" text-white overflow-hidden relative  flex justify-center flex-col items-center">
                                        <img
                                            src=" https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/ast.svg?alt=media&token=90091eca-e96f-432b-a32a-add5e6f542e3"
                                            className="w-44 h-44 lg:w-48"
                                            alt="Komet join thanks"
                                        />
                                        <h2 className="flex text-lg leading-6 py-4 lg:text-2xl">
                                            That's Cool{" "}
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/future.svg?alt=media&token=e76969bc-bb28-4085-abad-6fa4eefc65b9"
                                                className=" mx-2 w-6"
                                                alt="Komet Rocket"
                                            />
                                        </h2>
                                        <p className="rankjoin font-bold text-xl">
                                            Thanks for joining the waitlist!
                                        </p>
                                        <p className="p-5"> Your Current Postion</p>
                                        <div className="border border-[#8146FF] w-[90%] text-center text-xl p-2 max-w-md">
                                            # {rank ? rank : "loading....."}
                                        </div>

                                        <p className="text-sm my-6 text-center px-8">
                                            The first 1000 frens can get an exclusive NFT airdrop of worth $100 🎉
                                        </p>
                                        <div className="flex justify-between  w-[90%] text-sm max-w-md ">
                                            {
                                                reflink ? <RWebShare
                                                    data={{
                                                        title: reflink,
                                                        url: reflink,
                                                        text: reflink,
                                                    }}
                                                >
                                                    <button className="w-full intro-gradient rounded-lg p-2 text-xl  hero">
                                                        Invite Friends
                                                    </button>
                                                </RWebShare> : null
                                            }

                                        </div>
                                    </div>

                                </div>
                                {/*footer*/}

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );


};