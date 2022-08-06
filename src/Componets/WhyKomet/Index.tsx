import { doc, getDoc } from "firebase/firestore";
import WhyKOmetCard from "./whycard";
import { collection, query, where, getDocs } from "firebase/firestore";
import React from "react";
import createScrollSnap from "scroll-snap";
import { db } from "../../firebase";

const dummyData = {
  CollectionImage:
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
  CollectionPrice: "0.002",
  collectionDescription:
    "NFT stands for non-fungible token. It’s generally built using the same kind of programming as cryptocurrency, like Bitcoin or Ethereum, but that’s where the similarity ends.  Physical money and cryptocurrencies are “fungible,” meaning they can be traded or exchanged for one another. They’re also equal in value—one dollar is always worth another dollar; one Bitcoin is always equal to another Bitcoin. Crypto’s fungibility makes it a trusted means of conducting transactions on the blockchain.  NFTs are different. Each has a digital signature that makes it impossible for NFTs to be exchanged for or equal to one another (hence, non-fungible). One NBA Top Shot clip, for example, is not equal to EVERYDAYS simply because they’re both NFTs. (One NBA Top Shot clip isn’t even necessarily equal to another NBA Top Shot clip, for that matter.)",
  collectionFollowers: '"yY1bs2rGZEQx1esl1o1Y"',
  collectionLaunchDate: "20-aug-2022",
  collectionName: "Dummy Collection",
  collectionRanking: '"IiUaAqoavJmKtKULPPks"',
  collectionSocialMedia: { twitter: '""', discord: '""' },
};

const WhyKomet = () => {
  const [collectionData, setCollectionData] = React.useState([dummyData]);
  const container = React.createRef();

  const bindScrollSnap = () => {
    const element: any = container.current;
    createScrollSnap(
      element,
      {
        snapDestinationY: "90%",
      },
      () => console.log("snapped")
    );
  };

  React.useEffect(() => {
    getData();
    bindScrollSnap();
  }, []);

  const getData = async () => {
    try {
      const q = query(collection(db, "Collections"));

      const querySnapshot = await getDocs(q);
      //   console.log("querysnapshorts", querySnapshot)

      const arr: any = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        arr.push({ data: doc.data(), id: doc.id });
      });

      setCollectionData(arr);
    } catch (err) {}
  };

  return (
    <>
      <div>
        <div
          id="collection"
          // @ts-ignore
          ref={container}
          className="SnapView"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "auto",
            scrollbarWidth : 'none',
            scrollbarColor : 'black',
            top: 0,
            left: 0,
          }}
        >
          {collectionData.map((res) => {
            // @ts-ignore
            const data = res?.data;
            // @ts-ignore
            const id = res?.id;
            return (
              <WhyKOmetCard
                title={data?.collectionName}
                url={data?.collectionUrl}
                text={data?.collectionDescription}
                launch={data?.collectionLaunchDate}
                collectionId={id}
                FollowersId={data?.collectionFollowers}
                data={data}
                score={0}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhyKomet;
