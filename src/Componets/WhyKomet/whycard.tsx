// import { doc, getDoc, setDoc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { getFollowers, handleFollow } from "../../utils/FirebaseFuctions";
import { UserAuth } from "../GooogleProvider/GoogleAuthProvider";
import "./whykomet.css";

interface Props {
  title: String;
  text: String;
  url: string;
  launch: String;
  score: Number;
  collectionId: string;
  FollowersId: string;
  data: any;
}

const WhyKOmetCard = ({
  title,
  url,
  text,
  launch,
  score,
  collectionId,
  FollowersId,
  data,
}: Props) => {
  const navigate = useNavigate();
  const { user }: any = UserAuth();
  const [followers, setFollowers] = React.useState(0);

  React.useEffect(() => {
    if (FollowersId) {
      getFollowers(FollowersId).then((res) => setFollowers(res));
    }
  }, [FollowersId]);

  function intlFormat(num: number) {
    return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
  }

  function makeFriendly(num: number) {
    if (num >= 1000000) return intlFormat(num / 1000000) + "M";
    if (num >= 1000) return intlFormat(num / 1000) + "k";
    return intlFormat(num);
  }

  return (
    <>
      <div
        className="page first-page"
      >
        {/* <p>{data?.collectionName}</p> */}
        <div className="image_section_komet">
          <img
            className="object-cover"
            src={ url || "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"}
            alt=""
          />
        </div>
        <div className="text_section_komet">
          <h1 className="text-5xl font-bold counter pt-5">{title}</h1>
          <p className="text-x py-2">Launch Date : {launch}</p>
          <p className="text-x py-2">Score : {"01205"}</p>
          <p className="text-x py-2">Price : {data?.collectionPrice}</p>


          <div className="btnSection_komet">
            <button
              className="more_btn_komet border-1 btn"
            >
              Followers {makeFriendly(followers)}
            </button>
            <button
              className="more_btn_komet"
              onClick={() =>
                navigate("/nft", { state : {data, collectionId, FollowersId} })
              }
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyKOmetCard;
