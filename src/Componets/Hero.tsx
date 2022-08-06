import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { useAppContext } from "../_context";
import JoinWaitlist from "./Join waitlist";
import "./animation.css";

const windowWidth = window.innerWidth;

const Hero = () => {
  const { email, setEmail, showModal, setShowModal, d, dset } = useAppContext();
  return (
    <>
      <div className="">
        <div className="w-[80%] m-auto min-h-screen flex justify-center items-center">
          <div className="text-center  ">
            <h1 className="text-4xl md:text-6xl font-bold -mb-2">
              Discover the best
              {/* <span className="counter font-bold">creators</span> */}
            </h1>
            <div className={` ${(windowWidth > 640) ? 'flex' : ''} justify-center items-center mt-4`}>
              <div className="root_text_container">
                <div className="inner_text_container">
                  <ul className={`flip2  ${(windowWidth > 640) ? 'text-right': 'text-center'}`}>
                    <li className={`textarea text-4xl md:text-6xl font-bold `}>
                      <span className="counter font-bold">creators</span>
                    </li>
                    <br />
                    <li className="textarea text-4xl md:text-6xl font-bold">
                      <span className="counter font-bold">communities </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h1 className={`text-4xl md:text-6xl font-bold ${(windowWidth > 640) ? '-mt-6' : 'mt-2'}`}>
                  in #Web3
                </h1>
              </div>
            </div>
            <p className="text-sm md:text-xl py-6 font-bold">
              Don’t miss out on upcoming NFT projects and earn
              <span className="counter">digital rewards!</span>
            </p>

            {/* Animation */}

            <div className="w-full my-10 justify-center flex">
              <a href="#collection">
                <button
                  className="btn md:text-2xl px-12 py-3 rounded-full font-bold flex items-center"
                  onClick={() => {
                    // console.log("clicked");
                    // dset(true);
                  }}
                >
                  <span className="mr-4">Explore Now</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </a>
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
  );
};

export default Hero;
