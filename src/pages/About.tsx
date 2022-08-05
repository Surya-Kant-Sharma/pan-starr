
import TeamCard from "../Componets/Aboutus/TeamCard";
import Footer from "../Componets/Footer/Index";
import JoinWaitlist from "../Componets/Join waitlist/index";
import Navbar from "../Componets/Navbar";


const TeamData = [
    {
        name: "RatnaKush",
        imglink: "https://pbs.twimg.com/profile_images/1242143465875505153/cvwgn6GA_400x400.jpg",
        twitter: "https://twitter.com/RatnaKush",
        role: "CEO & Founder"
    },
    {
        name: "Vedant",
        imglink: "https://pbs.twimg.com/profile_images/1516143426928267264/2KsuHusi_400x400.jpg",
        twitter: "https://twitter.com/_vedantpawar_",
        role: "CTO & Founder"
    },
    {
        name: "satyam",
        imglink: "https://pbs.twimg.com/profile_images/1508937780084318214/pcjY-hFq_400x400.jpg",
        twitter: "https://twitter.com/sk1122_",
        role: "backend & solidity Enigneer"
    },
    {
        name: "Shivam",
        imglink: "https://pbs.twimg.com/profile_images/1311286667685187584/gQ1S_TAR_400x400.jpg",
        twitter: "https://twitter.com/shivaam23",
        role: "Solidity enginner"
    },
    {
        name: "Vikash",
        imglink: "https://pbs.twimg.com/profile_images/1495293615970873348/eI7Zl7pC_400x400.jpg",
        twitter: "https://twitter.com/44_chann",
        role: "frontend developer "
    },
    {
        name: "Pooja Yamsalwar",
        imglink: "https://pbs.twimg.com/profile_images/1534160248772390913/1BmWM-WM_400x400.jpg",
        twitter: "https://twitter.com/poojaaaa05?https://twitter.com/poojaaaa05?t=T2Waxpfu54amK2m9fF",
        role: "ui/ux designer"
    },
    {
        name: "Ishita Pandey",
        imglink: "https://pbs.twimg.com/profile_images/1427140773464608775/stWNiQei_400x400.jpg",
        twitter: "https://twitter.com/ishitaapandey?s=21&t=HJLClsV7its6YU4YaddL-Q",
        role: "social media manager"
    },
    {
        name: "Anmol",
        imglink: "https://pbs.twimg.com/profile_images/1518993545574502400/q2dvX3bS_400x400.jpg",
        twitter: "https://twitter.com/anmol_gh_",
        role: "community manager"
    },

    {
        name: "Mahaparsad",
        imglink: "https://pbs.twimg.com/profile_images/1478382095999377410/1gUnt9P2_400x400.jpg",
        twitter: "https://twitter.com/mahaprasad_",
        role: "socail media manager"
    },
    {
        name: "Aditiya Raj",
        imglink: "https://pbs.twimg.com/profile_images/1506490684085514240/IbkaaHwi_400x400.jpg",
        twitter: "https://twitter.com/arktwts",
        role: "backend enginner"
    },
    {
        name: "Aditiya Gupta",
        imglink: "https://pbs.twimg.com/profile_images/1488089831028658178/sYtlUjXp_400x400.jpg",
        twitter: "https://twitter.com/adiig7",
        role: "devloper community manager"
    },
    {
        name: "Sabsatine",
        imglink: "https://pbs.twimg.com/profile_images/1526314137843793923/4LUwR2E5_400x400.jpg",
        twitter: "https://twitter.com/Sabastine_Iroka?t=Wnpod_-AEiMrStgkuO4cxA&s=09",
        role: "content creator"
    },
    {
        name: "Shubham Upadhayay",
        imglink: "https://pbs.twimg.com/profile_images/1521876011138224128/WFaNNySB_400x400.jpg",
        twitter: "https://twitter.com/iamshubhamu?t=ZppUVAdCg4xZLlw-vtMf7Q&s=08",
        role: "devloper relations"

    }
]


const Aboutus = () => {
    return (
        <><div className="text-opacity-90">
            <Navbar />
            <div className="w-[80%] m-auto ">
                <div className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-[90vh] ">
                    <h1 className="text-4xl md:text-7xl font-bold counter ">We are building </h1>
                    <h1 className="text-4xl md:text-7xl my-6 font-bold">you a home</h1>
                    <p className="text-xl md:text-3xl counter">in the world of crypto</p>
                </div>
                <h1 className="text-4xl lg:text-5xl text-center font-bold">Our <span className="counter">Team</span></h1>
                <p className="text-center text-lg py-4">We have small but growing remote first team</p>
                <div className="min-h-screen my-8 w-full  lg:w-[80%] flex content-start justify-center flex-wrap text-white  mx-auto">
                    {
                        TeamData && TeamData.map((item) => {
                            return <TeamCard name={item.name} twitter={item.twitter} img={item.imglink} role={item.role} />
                        })
                    }
                </div>

                <div className="min-h-screen w-[80%] flex flex-col justify-center m-auto">
                    <h1 className="text-center text-4xl md:text-6xl font-bold counter">Backed by the best</h1>
                    <div className="flex py-24 flex-wrap justify-center">
                        <div className="md:w-[33%] border w-[50%]">
                            <img className="object-cover  " src="https://www.remnote.com/assets/data/investor-images/general-catalyst.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <JoinWaitlist />
        </div>

        </>

    )
}

export default Aboutus;