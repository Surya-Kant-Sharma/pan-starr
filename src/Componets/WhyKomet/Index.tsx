import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import WhyKOmetCard from "./whycard";
import { collection, query, where, getDocs } from "firebase/firestore";
import React from "react";

const dummyData = {
  CollectionImage: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
  CollectionPrice: "0.002",
  collectionDescription: "NFT stands for non-fungible token. It’s generally built using the same kind of programming as cryptocurrency, like Bitcoin or Ethereum, but that’s where the similarity ends.  Physical money and cryptocurrencies are “fungible,” meaning they can be traded or exchanged for one another. They’re also equal in value—one dollar is always worth another dollar; one Bitcoin is always equal to another Bitcoin. Crypto’s fungibility makes it a trusted means of conducting transactions on the blockchain.  NFTs are different. Each has a digital signature that makes it impossible for NFTs to be exchanged for or equal to one another (hence, non-fungible). One NBA Top Shot clip, for example, is not equal to EVERYDAYS simply because they’re both NFTs. (One NBA Top Shot clip isn’t even necessarily equal to another NBA Top Shot clip, for that matter.)",
  collectionFollowers: '"yY1bs2rGZEQx1esl1o1Y"',
  collectionLaunchDate: "20-aug-2022",
  collectionName: "Dummy Collection",
  collectionRanking: '"IiUaAqoavJmKtKULPPks"',
  collectionSocialMedia: { twitter: '""', discord: '""' },
}

const WhyKomet = () => {
  const [collectionData, setCollectionData] = React.useState([dummyData]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const q = query(collection(db, "Collections"));

      const querySnapshot = await getDocs(q);
      //   console.log("querysnapshorts", querySnapshot)

      const arr: any = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        arr.push({ data : doc.data(), id : doc.id});
      });

      setCollectionData(arr);

      // const docRef = doc(db, "Collections", "SF");
      // const docSnap = await getDoc(docRef);

      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    } catch (err) {}
  };

  return (
    <>
      {/* <div>
                <div className="lg:w-[80%] m-auto  flex items-start mb-44 ">
                    <div className="mx-12 w-[40%] hidden lg:block ">
                        <img className="object-cover" src="/img.png" alt="" />
                        <img className="object-cover" src="/img.png" alt="" />
                        <img className="object-cover" src="/img.png" alt="" />
                        <img className="object-cover" src="/img.png" alt="" />
                    </div>
                    <div className="w-full lg:w-[60%] p-6">
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <div className="h-[35vh]  flex bg-black flex-col justify-start md:px-11 ">
                            <h1 className="text-5xl font-bold counter">They grow so fast</h1>
                            <p className="text-xl py-7">Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you."</p>
                        </div>
                    </div>
                </div>

            </div> */}
      {/* <WhyKOmetCard
        title="They grow so fast"
        text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you."
      />
      <WhyKOmetCard
        title="They grow so fast"
        text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you."
      />
      <WhyKOmetCard
      title="They grow so fast"
      text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you."
    /> */}

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
    </>
  );
};

export default WhyKomet;
