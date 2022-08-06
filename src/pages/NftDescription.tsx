// import { doc, getDoc, setDoc } from "firebase/firestore";
import React from "react";
import "./nftdescription.css";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { ImEarth } from "react-icons/im";
import { BiShareAlt } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { db } from "../Componets/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addRanking,
  Follow,
  getFollowers,
  getRanking,
  handleFollow,
  handleRanking,
  removeRanking,
  unFollow,
  userFollowOrNot,
  userRankedOrNot,
} from "../utils/FirebaseFuctions";
import { UserAuth } from "../Componets/GooogleProvider/GoogleAuthProvider";
import ShareDialog from "../Componets/Dialog/dialog";

const NFTDescription = () => {
  const navigate = useNavigate();
  const [twitterFollowers, setTwitterFollowers] = React.useState("0");
  const { state } = useLocation();
  const { data, collectionId, FollowersId }: any = state;
  const { user }: any = UserAuth();

  const [rank, setRank] = React.useState(0);
  const [isRank, setIsRank] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [follower, setFollowers] = React.useState(0);
  const [isFollow, setIsFollow] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getTwitterFollowers(data?.collectionSocialMedia?.twitterUsername);
  }, []);

  function intlFormat(num: number) {
    return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
  }

  function makeFriendly(num: number) {
    if (num >= 1000000) return intlFormat(num / 1000000) + "M";
    if (num >= 1000) return intlFormat(num / 1000) + "k";
    return intlFormat(num);
  }

  const getTwitterFollowers = (name: string) => {
    // console.log("getTwitter", name)
    axios
      .get(
        "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=" +
          name
      )
      .then((res: any) => {
        setTwitterFollowers(makeFriendly(res.data[0].followers_count));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (FollowersId) {
      getRanking(data?.collectionRanking).then((res) => setRank(res));
      getFollowers(FollowersId).then((res) => setFollowers(res));
      userRankedOrNot(data?.collectionRanking, user, collectionId).then((res) =>
        setIsRank(res)
      );
      userFollowOrNot(FollowersId, user, collectionId).then((res) =>
        setIsFollow(res)
      );
    }
  }, []);

  const handleRankClick = () => {
    if (!isRank) {
      increseRank();
    } else {
      decreaseRank();
    }
  };

  const increseRank = () => {
    handleRanking(data?.collectionRanking, rank + 1);
    addRanking(user, collectionId, rank + 1);
    setRank(rank + 1);
    setIsRank(true);
  };

  const decreaseRank = () => {
    handleRanking(data?.collectionRanking, rank > 0 ? rank - 1 : 0);
    removeRanking(user, collectionId);
    setRank(rank > 0 ? rank - 1 : 0);
    setIsRank(false);
  };

  const handleFollowClick = () => {
    if (!isFollow) {
      Increasefollow();
    } else {
      decrementFollow();
    }
  };

  const Increasefollow = () => {
    handleFollow(data?.collectionFollowers, follower + 1);
    Follow(user, collectionId);
    setFollowers(follower + 1);
    setIsFollow(true);
  };

  const decrementFollow = () => {
    handleFollow(data?.collectionFollowers, follower - 1);
    unFollow(user, collectionId);
    setFollowers(follower - 1);
    setIsFollow(false);
  };

  return (
    <div className="parent_root">
      <div className="root_komet">
        {/* <Header onBack={() => {navgate('/')}} secondComponent={false} firstComponent={true} onProfileClick={() => {}}/> */}
        <div style={{ width: "100%", display: "flex", justifyContent: "left" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "left",
              textAlign: "left",
              // backgroundColor : "red"
            }}
          >
            <IoIosArrowBack
              className=""
              style={{ fontSize: "4vh" }}
              onClick={() => navigate("/")}
            />
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "right",
              textAlign: "left",
              // backgroundColor : "red"
            }}
          >
            <button
              className="btn"
              style={{
                backgroundColor: "red",
                padding: 6,
                paddingLeft : 9,
                paddingRight : 9,
                borderRadius : '10px',
                fontSize: "2.5vh",
                fontWeight: "normal",
                display: `${user?.email ? "block" : "none"}`,
              }}
              onClick={handleFollowClick}
            >
              {!isFollow ? "Follow" : "unfollow"}
            </button>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <img
            className="image_section_komet_nft_description"
            src={data?.collectionUrl}
            alt="nft"
          />
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="fadeText">{data?.collectionCreater}</p>
            <GoVerified
              style={{ margin: 5, marginTop: 15, color: "#29C5F6" }}
            />
          </div>
          <h2 className="heading counter">{data?.collectionName}</h2>
          <div>
            <div className="socialmedia_section">
              <div className="sentiment_section counter">
                <div className="sentiment_icon_section">
                  {/* <IoIosArrowDropup
                    className="sentiment_icon"
                    onClick={() => {}}
                  /> */}
                  <p style={{ width: "100%", textAlign: "center" }}>
                    {makeFriendly(follower)}
                  </p>
                  <p style={{ width: "100%", textAlign: "center" }}>
                    Followers
                  </p>
                </div>
              </div>
              <div className="SocialMedia_button">
                <div className="SocialMedia">
                  <div
                    className="icon_section"
                    onClick={() =>
                      window.open(
                        (data?.collectionSocialMedia?.twitterUrl).toString(),
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    {/* <img src="" alt="logo" /> */}
                    <BsTwitter className="icon" />
                    <p>{twitterFollowers}</p>
                  </div>
                  <div className="icon_section"
                     onClick={() =>
                      window.open((data?.collectionSocialMedia?.discordUrl).toString(), '_blank', 'noopener,noreferrer')
                    }
                  >
                    {/* <img src="" alt="logo" /> */}
                    <SiDiscord className="icon" />
                    <p>Discord</p>
                  </div>
                </div>
                <div className="AddOn_section">
                  <div className="icon_section">
                    {/* <img src="" alt="logo" /> */}
                    <ImEarth className="icon" />
                    <p>site</p>
                  </div>
                  <div className="icon_section" onClick={() => setOpen(true)}>
                    {/* <img src="" alt="logo" /> */}
                    <BiShareAlt className="icon" />
                    <p>Share</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h4 style={{ color: "black", fontWeight: "bold" }}>Token Price</h4>
          <h4
            className="counter"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Rating {rank}
          </h4>

          <div
            style={{
              width: "100%",
              display: "flex",
              marginBottom: "15px",
            }}
          >
            <div className="price_section">
              <div className="price">
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "40px",
                    marginRight: "10px",
                  }}
                  src="https://ffnews.com/wp-content/uploads/2021/07/q4itcBEb_400x400-300x300.jpg"
                  alt=""
                />
                <p>{data?.collectionPrice}</p>
              </div>

              <div className="rating_section">
                <div style={{ display: `${user?.email ? "block" : "none"}` }}>
                  <p className="ml-3 text-sm font-medium text-white-900 dark:text-gray-300 mr-1 mb-2">
                    {!isRank ? "Rank me" : "You Already Ranked"}
                  </p>
                  <label className="inline-flex relative items-center mb-4 cursor-pointer">
                    <input
                      type="checkbox"
                      // value={isRank.toString()}
                      checked={isRank}
                      onChange={handleRankClick}
                      id="default-toggle"
                      className="sr-only peer"
                    />
                    <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-greenyellow-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked : ${(isRank) ? 'btn' : ""}`}></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <h4
            style={{
              color: "white",
              fontWeight: "bold",
              marginBottom: "25px",
              fontSize: "2.5vh",
            }}
          >
            Description
          </h4>

          <div>
            <p>{data?.collectionDescription}</p>
            {/* <br />
            <p>{`We are excited to bring you a Sino Global Capital Catchup in Collaboration with OGCLUBDAO, with the launch of our first ever NFT POAP powered by our wallet partner Komet.`}</p>{" "}
            <br />
            <p>{`✳️ Sinoglobal Capital stands at the intersection of finance and technology - East and West. We leverage our network to help our portfolio companies enter one of the most idiosyncratic, but important, markets in the blockchain Asia.`}</p>{" "}
            <br />
            <p>{`✳️ OGCLUBDAO is being built with the same motto of bringing people together interested in Web3 and beyond and allowing the magic of serendipity to happen. We won’t be amused to see startups getting formed, projects getting funded or matchmaking happening between co-founders.`}</p>
            <br />
            <p>{`✳️ We are calling upon all the original & new movers and shakers of the Indian startup ecosystem to come together and forge a tribe to be at the forefront of crypto innovation. The name is apt as the original gangsta has done it once and will do it again. Inspired by FWB, OGCLUB will be structured as a social DAO and will be a community-driven organization. Members will buy tokens/NFTs to be part of the diaspora and avail of membership benefits.`}</p>{" "}
            <br />
            <p>{`✳️ Komet's mission is to bring the community closer. To build a simplified and secured platform for 100M+ people globally where they can manage their digital assets without any fear and hassle.`}</p>{" "}
            <br />
            <p>{`✳️ What is the purpose of this Meet-up?`}</p> <br />
            <p>{`✳️ You are invited to join if #Web3 #NFT #Crypto is interesting to you. We’re a community of experienced and credible investors and entrepreneurs with their actionable viewpoints on web3.`}</p>{" "}
            <br />
            <p>{`✳️ What is the NFT POAP?\nA POAP NFT defines your presence with the community during the event interaction.`}</p>{" "}
            <br />
            <p>{`✳️ What is the Venue of the Meet-up?\nBangalore - Mint the NFT ticket get the address ;)`}</p>{" "}
            <br />
            <p>{`✳️ Who is eligible to attend? ​\nFounders, Investors, Product Managers, Developers, Community & Ecosystem Enablers who are into Web3 or want to transition from web2 to web3.`}</p>{" "}
            <br />
            <p>{`✳️ When is the Meet-up?`}</p> <br />
            <span
              style={{
                fontFamily: "arial",
                fontWeight: "bold",
                fontSize: "16px",
                color: "black",
              }}
            >
              From 16th July, 2022 - 4:00 PM IST onwards
            </span> */}

            {/* share dialog */}
          </div>
        </div>
      </div>
      <ShareDialog open={open} setOpen={setOpen} id={collectionId} />
    </div>
  );
};

export default NFTDescription;
