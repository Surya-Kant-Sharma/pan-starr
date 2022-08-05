import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";


interface Props {
    name: string,
    img: string,
    twitter: string
    role: string
}

const TeamCard = ({ name, img, twitter, role }: Props) => {
    return (
        <>
            <div className=" flex my-1 flex-col items-center px-4 py-5 space-y-4  lg:w-[24%] md:w-[33%] w-[50%] rounded-xl">
                <div className="w-20 rounded-full ">
                    <img className="object-cover rounded-full" src={img} alt="" />
                </div>
                <div className="text-center space-y-4">
                    <div className="">
                        <h1 className="text-lg font-bold">{name}</h1>
                        <p className="text-xs">{role}</p>
                    </div>
                    {/* <p className="text-xs">Curious about tools, defi and tech dogs </p> */}

                </div>
                <div className="flex space-x-4 text-3xl">
                    <a href={twitter} target="_blank">
                        <AiFillTwitterCircle />
                    </a>
                </div>
            </div>
        </>
    )
}


export default TeamCard;