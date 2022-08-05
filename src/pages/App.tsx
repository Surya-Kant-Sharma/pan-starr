import { useState } from "react";
import Features from "../Componets/Features/Index";
import Footer from "../Componets/Footer/Index";
import Hero from "../Componets/Hero";
import Navbar from "../Componets/Navbar";
import { Rank } from "../Componets/Rank";
import WhyKomet from "../Componets/WhyKomet/Index";
import { AppContext } from "../_context";
import toast, { Toaster } from "react-hot-toast";
import Aboutus from "./About";
import Careers from "./Careers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// @ts-ignore
import { addDoc, doc, getDocs, setDoc, collection, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import React from "react";
import NFTDescription from "./NftDescription";
import {
  AuthContextProvider,
  UserAuth,
} from "../Componets/GooogleProvider/GoogleAuthProvider";
import ShareNFTDescription from "./shareNftPage";

const App = () => {
  const { user }: any = UserAuth();
  React.useEffect(() => {
    CheckUserDetails(user);
    getData();
  }, [user]);

  const CheckUserDetails = async (user : any) => {
    const docRef = doc(db, "Users", user?.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      if(data.exist) {
        console.log("user already exists")
      }
    } else {
      console.log("No such document!");
      AddNewUser(user);
    }
  };

  const AddNewUser = async (user: any) => {
    try {
      await setDoc(doc(db, "Users", user.email), {
        username: user.displayName,
        exist: true,
      });
      await setDoc(doc(db, "Users", user.email, "others", "followers"), {
        data: "demo",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log("data");
  };

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "s"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <WhyKomet />
        <Features />
        <Footer />
        <Rank />
      </div>
    </>
  );
};

const Home = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [d, dset] = useState(false);
  const shared_state = {
    email,
    setEmail,
    showModal,
    setShowModal,
    d,
    dset,
  };

  return (
    <>
      <AuthContextProvider>
        <AppContext.Provider value={shared_state}>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },
              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />

          <div className="w-full bg-black text-white min-h-screen  text-opacity-90">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="about" element={<Aboutus />} />
                <Route path="docs" element={<Aboutus />} />
                <Route path="careers" element={<Careers />} />
                <Route path="nft" element={<NFTDescription />} />
                <Route path="collection/:id" element={<ShareNFTDescription />} />
              </Routes>
            </BrowserRouter>
          </div>
        </AppContext.Provider>
      </AuthContextProvider>
    </>
  );
};

export default Home;
