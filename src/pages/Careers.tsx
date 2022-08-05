import Career from "../Componets/careers/career";
import Footer from "../Componets/Footer/Index";
import JoinWaitlist from "../Componets/Join waitlist";
import Navbar from "../Componets/Navbar";

const Careers = () => {
    return (
        <>
            <Navbar />
            <div className="w-[80%] m-auto">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-7xl font-bold counter">We are leading </h1>
                    <p className="text-3xl my-10">in the world of crypto</p>
                </div>
                <div className="h-[80vh] flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold counter">Join a team</h1>
                    <h1 className="text-5xl font-bold counter">of craftsman</h1>
                    <p className="my-12 text-xl pr-24">Some of us are developers, some product folks, some growth hackers, and some really good copywriters. Whatever it is that your trade is called, if you consider it a craft, one you can see adding value to Flint, then come on board.</p>
                </div>
                <div className="mb-24">
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                    <Career />
                </div>

            </div>
            <Footer />
            <JoinWaitlist />
        </>
    )
}

export default Careers;